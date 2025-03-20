import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '../types';

// TODO: Replace with actual entities
const ENTITIES = [];

@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: (configService: ConfigService<Config>) => {
            const databaseConfig = configService.get('database');
            const { host, port, user, password, database } = databaseConfig;
            return {
               type: 'postgres',
               host: host,
               port: port,
               username: user,
               password: password,
               database: database,
               entities: ENTITIES,
               // Prevent the app from modifying the database schema
               synchronize: false,
            };
         },
         inject: [ConfigService],
      }),
      TypeOrmModule.forFeature([...ENTITIES]),
   ],
   exports: [TypeOrmModule],
})
export class DatabaseModule {}
