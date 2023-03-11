import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  UploadedFile,
} from '@nestjs/common';
import 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('files')
@UseInterceptors(ClassSerializerInterceptor)
export default class CategoriesController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './apps/nest-general/src/assets',
        filename: function (req, file, cb) {
          cb(null, file.originalname + '_' + Date.now() + '.pdf');
        },
      }),
    })
  )
  async createCategory(@UploadedFile() file: Express.Multer.File) {
    return {
      msg: `Archivo ${file.filename} cargado correctamente`,
    };
  }
}
