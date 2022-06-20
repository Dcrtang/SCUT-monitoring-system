import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const password = this.configService.get<string>('PASSWORD');
    const headers = context.switchToHttp().getRequest<Request>().headers;
    if (headers['password'] !== password) throw new UnauthorizedException();
    return true;
  }
}
