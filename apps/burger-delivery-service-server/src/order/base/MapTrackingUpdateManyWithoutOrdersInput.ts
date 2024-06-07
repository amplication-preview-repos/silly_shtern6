/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MapTrackingWhereUniqueInput } from "../../mapTracking/base/MapTrackingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MapTrackingUpdateManyWithoutOrdersInput {
  @Field(() => [MapTrackingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MapTrackingWhereUniqueInput],
  })
  connect?: Array<MapTrackingWhereUniqueInput>;

  @Field(() => [MapTrackingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MapTrackingWhereUniqueInput],
  })
  disconnect?: Array<MapTrackingWhereUniqueInput>;

  @Field(() => [MapTrackingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MapTrackingWhereUniqueInput],
  })
  set?: Array<MapTrackingWhereUniqueInput>;
}

export { MapTrackingUpdateManyWithoutOrdersInput as MapTrackingUpdateManyWithoutOrdersInput };
