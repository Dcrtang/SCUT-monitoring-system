import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import {
  ConfigModule as GlobalConfigModule,
  ConfigService,
} from '@nestjs/config';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    ConfigModule,
    GlobalConfigModule.forRoot({
      isGlobal: true,
    }),
    FileModule,
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          rootPath: configService.get<string>('DATA_PATH') + '/files',
          serveRoot: '/files',
        },
      ],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
