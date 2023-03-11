import { Module } from '@nestjs/common';
import UploadFilesController from './uploadFiles.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: '../../assets',
    }),
  ],
  controllers: [UploadFilesController],
  providers: [],
})
export class FilesUploadModule {}
