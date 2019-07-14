import { ApiModelProperty } from '@nestjs/swagger';

export class LoginRequestModel {
  @ApiModelProperty({ required: true, minLength: 6 })
  username: string;

  @ApiModelProperty({ required: true, minLength: 6, type: String, format: 'password' })
  password: string;
}
