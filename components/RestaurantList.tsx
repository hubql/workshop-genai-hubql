import prisma from "@/utils/prisma/client";

export const RestaurantList = async () => {
    const restaurants = await prisma.restaurant.findMany();
    return (
        <div>
            <h1 className="text-4xl">Restaurants</h1>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                    <h2 className="text-xl">{restaurant.name}</h2>
                </div>
            ))}
        </div>
    )
}