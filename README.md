# CadPay

A modern Solana dApp starter featuring secure vault functionality, seamless wallet authentication, and a sleek, responsive UI. Built with the latest tech stack for speed and developer experience.

## Features

-   **Secure Authentication**: Integrated with `@civic/auth` for robust and user-friendly wallet connection.
-   **Solana Vault**: Interact with a personal PDA (Program Derived Address) vault to securely deposit and withdraw SOL.
-   **Responsive Design**: Crafted with [Tailwind CSS v4](https://tailwindcss.com/) and [Framer Motion](https://www.framer.com/motion/) for smooth animations and a premium look.
-   **Type-Safe Client**: Auto-generated TypeScript client for the Anchor program using [Codama](https://github.com/codama-idl/codama).
-   **Optimized Performance**: leveraging Next.js 16 and React 19 for the best possible user experience.

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Blockchain** | [Solana](https://solana.com/), [Anchor](https://www.anchor-lang.com/) |
| **Auth** | [`@civic/auth`](https://docs.civic.com/) |
| **SDKs** | [`@solana/web3.js`](https://solana-labs.github.io/solana-web3.js/), [`@solana/kit`](https://github.com/solana-foundation/framework-kit) |

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (Project uses v20+)
-   [Rust](https://rustup.rs/)
-   [Solana CLI](https://solana.com/docs/intro/installation)
-   [Anchor CLI](https://www.anchor-lang.com/docs/installation)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SamuelOluwayomi/CadPay.git
    cd CadPay
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build the Anchor program:**

    ```bash
    npm run anchor-build
    ```

4.  **Generate the client:**

    ```bash
    npm run codama:js
    ```

    *Alternatively, run `npm run setup` to do both steps.*

5.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/        # Reusable UI components (Navbar, VaultCard, etc.)
│   ├── generated/         # Codama-generated Solana program client
│   └── page.tsx           # Main application page
├── anchor/                # Anchor workspace
│   └── programs/vault/    # Rust smart contract source code
├── public/                # Static assets
└── ...config files
```

## Deploying Your Own Vault

The project comes with a pre-configured vault program. To deploy your own instance to Devnet:

1.  **Configure Solana CLI:**
    ```bash
    solana config set --url devnet
    ```
2.  **Create a new wallet (if needed):**
    ```bash
    solana-keygen new
    ```
3.  **Airdrop SOL for deployment:**
    ```bash
    solana airdrop 2
    ```
4.  **Build and deploy:**
    ```bash
    cd anchor
    anchor build
    anchor keys sync
    anchor build
    anchor deploy
    ```
5.  **Update Client:**
    After deployment, ensure your updated program ID is reflected in the client by running:
    ```bash
    npm run codama:js
    ```

## Testing

Run the Anchor tests using:

```bash
npm run anchor-test
```

This uses [LiteSVM](https://github.com/LiteSVM/litesvm) for fast, lightweight testing of your Solana program.

## Learn More

-   [Solana Documentation](https://solana.com/docs)
-   [Anchor Documentation](https://www.anchor-lang.com/docs)
-   [Next.js Documentation](https://nextjs.org/docs)
