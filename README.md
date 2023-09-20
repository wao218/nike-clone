# Nike Clone

## Description

This project is a simplified clone of the Nike e-commerce website, showcasing the use of Next.js, Tailwind CSS, Supabase, and Stripe for building a web application. While it's a basic implementation, it covers the essential features of an e-commerce platform, including a home page, product listings, a checkout process, and account management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/your-username/nike-clone.git
   ```

2. Navigate to the project folder.

   ```
   cd nike-clone
   ```

3. Install the dependencies using npm or yarn.

   ```
   npm install
   # or
   yarn install
   ```

4. Set up your Supabase environment variables by creating a `.env.local` file in the root directory and adding your Supabase credentials.

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_KEY=your-supabase-api-key
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

5. Start the development server.

   ```
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and access the project at `http://localhost:3000`.

## Usage

This Nike clone project demonstrates the following features:

- **Home Page**: Navigate to the home page to explore featured products and promotions.

- **Product Listings**: Browse through a list of available Nike products with product details and pricing.

- **Checkout**: Add products to your cart and proceed to a seamless checkout process. Review your order, enter shipping details, and securely make payments using Stripe integration.

- **Account Management**: Users can create accounts, sign in, and manage their profile and order history.

## Features

- Responsive design using Tailwind CSS for a seamless experience across devices.
- Integration with Supabase for user authentication and data storage.
- Implement secure payment processing using Stripe, enabling users to make purchases with confidence.
- Minimalistic UI inspired by Nike's design.

## License

This project is licensed under the [MIT License](LICENSE).

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)
- [Stipe](https://stripe.com)

## Acknowledgments

Special thanks to the open-source community and the creators of Next.js, Tailwind CSS, Supabase and Stripe for their fantastic tools and documentation that made this project possible.
