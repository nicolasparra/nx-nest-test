import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseWithOKInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    const code = ctx.getResponse()?.statusCode;
    const status = 'ok';

    return next
      .handle()
      .pipe(
        catchError((err) => {
          return throwError(() => err);
        })
      )
      .pipe(map((data) => ({ status, data, code })))
      .pipe(
        tap(() => {
          if (ctx.getRequest()?.route?.path != 'health path') {
            console.log('LOG DE RESPUESTA');
          }
        })
      );
  }
}
