/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BurgerWhereInput } from "./BurgerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BurgerOrderByInput } from "./BurgerOrderByInput";

@ArgsType()
class BurgerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BurgerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BurgerWhereInput, { nullable: true })
  @Type(() => BurgerWhereInput)
  where?: BurgerWhereInput;

  @ApiProperty({
    required: false,
    type: [BurgerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BurgerOrderByInput], { nullable: true })
  @Type(() => BurgerOrderByInput)
  orderBy?: Array<BurgerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BurgerFindManyArgs as BurgerFindManyArgs };
