import Service from "../(models)/Service.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";
import { serviceValidation } from "@/validation/service.validation";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const serviceData = body.formData;
    console.log("Ch----------eck",serviceData)
    await serviceValidation.validate(serviceData);
    const newService = await Service.create(serviceData);
    return NextResponse.json(
      { message: "Project created successfully!", newService },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Project Error", error: err },
      { status: 500 }
    );
  }
}

export async function GET(req: any) {
  try {
    const services = await Service.find();
    return NextResponse.json(services, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 }
    );
  }
}
