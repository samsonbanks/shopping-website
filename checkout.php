<?php
// checkout.php
require_once('config.php');
require_once('vendor/autoload.php'); // Include Stripe PHP library

\Stripe\Stripe::setApiKey($stripeSecretKey);

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = $_POST['stripeToken'];

    // Create a charge on Stripe's servers
    try {
        $charge = \Stripe\Charge::create([
            'amount' => 1,500, // Amount in cents
            'currency' => 'NGN',
            'description' => 'Product charge',
            'source' => $token,
        ]);

        // Payment successful, update database, send confirmation email, etc.
        // Redirect to confirmation page
        header("Location: confirmation.html");
        exit();
    } catch (\Stripe\Exception\CardException $e) {
        // Payment failed, handle error
        echo "Payment failed: " . $e->getError()->message;
    }
}

?>