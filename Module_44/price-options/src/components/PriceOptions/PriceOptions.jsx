import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited water and towel service",
                "Basic fitness classes",
                "Discounts on personal training sessions",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited water and towel service",
                "All fitness classes",
                "Personal trainer consultation",
                "Sauna and spa access",
                "Nutritional counseling",
                "Discounts on spa services"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": "$19.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited water and towel service",
                "Basic fitness classes",
                "Valid student ID required",
                "Discounted rates on workshops"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": "$79.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited water and towel service",
                "All fitness classes",
                "Childcare service",
                "Access for two adults and up to two children",
                "Family fitness classes",
                "Discounts on family spa packages"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl mb-4">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;