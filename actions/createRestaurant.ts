"use server"
import prisma from "@/utils/prisma/client";

export const createRestaurant = async (name:string) => {
    await prisma.restaurant.create({
        data: {
        name: name
        }
    });
    return;
}