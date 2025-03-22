import React, { useState } from "react";
import styles from "./styles.module.css";

const hardcodedData = {
  customer_profile: {
    age_group: "18-24",
    location: "New York",
    income_level: "High",
    spending_category: "Dining, Travel",
    avg_monthly_spend: 2000,
    past_rewards_redeemed: ["Cashback", "TravelMiles"],
  },
  recommended_campaigns: [
    {
      campaign_name: "Premium Dining Experience",
      description:
        "Exclusive access to high-end restaurants in New York with 3x points on dining expenses and special chef's table experiences.",
      target_audience: "Young affluent customers who prioritize dining experiences",
      expected_benefits:
        "Increase in dining spend by 25%, improved brand loyalty through exclusive experiences",
    },
    {
      campaign_name: "Travel Elite Program",
      description:
        "Enhanced travel rewards with 4x points on all travel bookings, priority airport lounge access, and exclusive hotel upgrades.",
      target_audience:
        "Young professionals with high disposable income who travel frequently",
      expected_benefits:
        "30% increase in travel category spending, higher customer retention through premium travel benefits",
    },
    {
      campaign_name: "Lifestyle Concierge Service",
      description:
        "Personal concierge service for booking hard-to-get restaurant reservations and travel experiences with bonus points for combined dining and travel purchases.",
      target_audience:
        "High-income young adults seeking convenience and premium experiences",
      expected_benefits:
        "Cross-category spending increase of 20%, higher engagement through personalized service",
    },
  ],
};

const CampaignPage = () => {
    const [campaigns] = useState(hardcodedData.recommended_campaigns);
    const { customer_profile } = hardcodedData;

    return (
        <div className={styles.campaign_container}>
            <h1>Customer Profile</h1>
            <div className={styles.customer_profile}>
                <p><strong>Age Group:</strong> {customer_profile.age_group}</p>
        <p><strong>Location:</strong> {customer_profile.location}</p>
        <p><strong>Income Level:</strong> {customer_profile.income_level}</p>
        <p><strong>Spending Category:</strong> {customer_profile.spending_category}</p>
        <p><strong>Avg. Monthly Spend:</strong> ${customer_profile.avg_monthly_spend}</p>
        <p><strong>Past Rewards Redeemed:</strong> {customer_profile.past_rewards_redeemed.join(", ")}</p>
      </div>

      <h1>Recommended Campaigns</h1>
      <div className={styles.campaign_list}>
        {campaigns.map((campaign, index) => (
          <div key={index} className={styles.campaign_card}>
            <h2>{campaign.campaign_name}</h2>
            <p>{campaign.description}</p>
            <p><strong>Target Audience:</strong> {campaign.target_audience}</p>
            <p><strong>Expected Benefits:</strong> {campaign.expected_benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPage;
