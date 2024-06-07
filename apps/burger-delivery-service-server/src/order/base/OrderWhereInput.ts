/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BurgerWhereUniqueInput } from "../../burger/base/BurgerWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { DeliveryListRelationFilter } from "../../delivery/base/DeliveryListRelationFilter";
import { DeliveryWhereUniqueInput } from "../../delivery/base/DeliveryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MapTrackingListRelationFilter } from "../../mapTracking/base/MapTrackingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: () => BurgerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BurgerWhereUniqueInput)
  @IsOptional()
  @Field(() => BurgerWhereUniqueInput, {
    nullable: true,
  })
  burger?: BurgerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryListRelationFilter, {
    nullable: true,
  })
  deliveries?: DeliveryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DeliveryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeliveryWhereUniqueInput)
  @IsOptional()
  @Field(() => DeliveryWhereUniqueInput, {
    nullable: true,
  })
  delivery?: DeliveryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MapTrackingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MapTrackingListRelationFilter)
  @IsOptional()
  @Field(() => MapTrackingListRelationFilter, {
    nullable: true,
  })
  mapTrackings?: MapTrackingListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  orderDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { OrderWhereInput as OrderWhereInput };
