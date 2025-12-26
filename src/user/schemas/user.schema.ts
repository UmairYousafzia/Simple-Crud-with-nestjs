import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schema";

@Schema ({timestamps:true})
export class User extends Document {
    @Prop()
    name:string;

    @Prop({type:Address})
    address:Address;
}

export const userschema = SchemaFactory.createForClass(User);