import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseHeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('X-Frame-Options', 'DENY');
        response.setHeader('Content-Security-Policy', "default-src 'self'");
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      })
    );
  }
}
