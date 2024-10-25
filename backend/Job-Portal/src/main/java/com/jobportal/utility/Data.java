package com.jobportal.utility;

public class Data {
    public static String getMessageBody(String otp,String name) {
        return "<!DOCTYPE html>"
                + "<html lang=\"en\">"
                + "<head>"
                + "<meta charset=\"UTF-8\">"
                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
                + "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">"
                + "<title>Your OTP Code</title>"
                + "<style>"
                + "body {font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; width: 100%;}"
                + "table {border-collapse: collapse; width: 100%;}"
                + ".email-container {max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);}"
                + "h1 {color: #333333;}"
                + "p {color: #555555; font-size: 16px; line-height: 1.5;}"
                + ".otp {font-size: 24px; font-weight: bold; color: #4CAF50; text-align: center; margin: 20px 0;}"
                + ".footer {font-size: 12px; color: #aaaaaa; text-align: center; margin-top: 20px;}"
                + ".btn {display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; border-radius: 5px; text-decoration: none; font-size: 18px; margin: 20px 0;}"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">"
                + "<tr><td align=\"center\">"
                + "<table role=\"presentation\" class=\"email-container\">"
                + "<tr><td>"
                + "<h1>One-Time Password (OTP) Verification</h1>"
                + "<p>Hello [User],</p>"
                + "<p>We received a request to verify your email address. Please use the OTP code below to proceed with your verification:</p>"
                + "<div class=\"otp\">"+otp+"</div>"  // <-- Replace this with dynamic OTP code
                + "<p>If you did not request this, please ignore this email or contact our support team.</p>"
                + "<p>Thank you!</p>"
                + "<a href=\"#\" class=\"btn\">Verify Now</a>"
                + "</td></tr></table>"
                + "<div class=\"footer\">"
                + "<p>&copy; 2024 Your Company Name. All rights reserved.</p>"
                + "<p>If you did not request this email, please contact our support team at <a href=\"mailto:support@example.com\">support@example.com</a></p>"
                + "</div>"
                + "</td></tr></table>"
                + "</body>"
                + "</html>";

    }

}