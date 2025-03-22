import React, { useState } from "react";
import styles from "./styles.module.css";

const hardcodedData = {
  customer_profile: {
    CohortName: "Young, entertainment-focused individuals",
    AgeGroup: "21-35",
    Locations: ["Urban centers", "Metropolitan cities"],
    IncomeLevel: "Middle to Upper-middle",
    SpendingCategory: "Entertainment, Dining, Online streaming",
    AvgMonthlySpend: 35000,
    PastRewardsRedeemed: ["Movie tickets", "Dining vouchers", "OTT subscriptions"],
  },
  recommended_campaigns: [
    {
      CampaignName: "Entertainment Plus Card",
      CardName: "Entertainment Plus Credit Card",
      Description:
        "A rewards card specifically designed for entertainment enthusiasts with accelerated points on movie tickets, concerts, streaming services, and dining experiences.",
      TargetAudience:
        "Young professionals who frequently spend on entertainment and dining experiences",
      ExpectedBenefits:
        "Increased engagement in entertainment categories with 3x higher redemption rates and 25% boost in category spending",
      KeyFeatures: {
        RewardRate: "5 RP/₹100 (movies, concerts, streaming), 3 RP/₹100 (dining, food delivery), 1 RP/₹100 (others)",
        Redemption: "1 RP = ₹0.30 (entertainment), ₹0.25 (dining), ₹0.15 (others)",
        Capping: "25k RP/month (entertainment categories)",
        RedemptionFee: "None",
        Milestone: "₹2L quarterly spend = 2 free movie tickets or 1-month free OTT subscription",
      },
    },
    {
      CampaignName: "Digital Lifestyle Rewards",
      CardName: "Digital Lifestyle Credit Card",
      Description:
        "A digital-first credit card offering premium rewards on online streaming subscriptions, gaming platforms, and digital content purchases with exclusive early access to entertainment events.",
      TargetAudience:
        "Tech-savvy young adults who consume digital entertainment and make online purchases regularly",
      ExpectedBenefits:
        "40% increase in digital subscription spending and 30% higher customer retention through digital engagement",
      KeyFeatures: {
        RewardRate: "6 RP/₹100 (streaming services, gaming), 4 RP/₹100 (online shopping), 2 RP/₹100 (others)",
        Redemption: "1 RP = ₹0.35 (digital subscriptions), ₹0.25 (online purchases), ₹0.15 (others)",
        Capping: "30k RP/month (digital categories)",
        RedemptionFee: "None",
        Milestone: "₹1.5L quarterly spend = Free annual subscription to premium streaming service",
      },
    },
    {
      CampaignName: "Social Explorer Rewards",
      CardName: "Social Explorer Credit Card",
      Description:
        "A lifestyle card focused on social experiences with enhanced rewards for dining out, weekend activities, events, and group experiences with cashback on ride-sharing services.",
      TargetAudience:
        "Socially active young adults who prioritize experiences over material possessions",
      ExpectedBenefits:
        "35% increase in weekend spending and 45% higher engagement with experiential rewards",
      KeyFeatures: {
        RewardRate: "5 RP/₹100 (dining, events, concerts), 3 RP/₹100 (travel, ride-sharing), 1 RP/₹100 (others)",
        Redemption: "1 RP = ₹0.30 (experiences), ₹0.20 (travel), ₹0.15 (others)",
        Capping: "20k RP/month (experience categories)",
        RedemptionFee: "None",
        Milestone: "₹2.5L quarterly spend = Exclusive access to premium events or dining experiences",
      },
    },
  ],
};

const CampaignPage = () => {
  const [campaigns] = useState(hardcodedData.recommended_campaigns);

  return (
    <div className={styles.campaign_container}>
      <h1 className={styles.page_title}>Recommended Campaigns</h1>
      <div className={styles.customer_profile}>
        <h2 className={styles.cohort_name}>Cohort: {hardcodedData.customer_profile.CohortName}</h2>
        <p><strong>Age Group:</strong> {hardcodedData.customer_profile.AgeGroup}</p>
        <p><strong>Locations:</strong> {hardcodedData.customer_profile.Locations.join(", ")}</p>
        <p><strong>Income Level:</strong> {hardcodedData.customer_profile.IncomeLevel}</p>
        <p><strong>Spending Category:</strong> {hardcodedData.customer_profile.SpendingCategory}</p>
        <p><strong>Avg Monthly Spend:</strong> ₹{hardcodedData.customer_profile.AvgMonthlySpend}</p>
        <p><strong>Past Rewards Redeemed:</strong> {hardcodedData.customer_profile.PastRewardsRedeemed.join(", ")}</p>
      </div>
      <div className={styles.campaign_list}>
        {campaigns.map((campaign, index) => (
          <div key={index} className={styles.campaign_card}>
            <h2 className={styles.campaign_title}>{campaign.CampaignName}</h2>
            <h3 className={styles.card_name}>{campaign.CardName}</h3>
            <p className={styles.campaign_description}>{campaign.Description}</p>
            <p><strong>Target Audience:</strong> {campaign.TargetAudience}</p>
            <p><strong>Expected Benefits:</strong> {campaign.ExpectedBenefits}</p>
            <div className={styles.key_features}>
              <h4>Key Features:</h4>
              <p><strong>Reward Rate:</strong> {campaign.KeyFeatures.RewardRate}</p>
              <p><strong>Redemption:</strong> {campaign.KeyFeatures.Redemption}</p>
              <p><strong>Capping:</strong> {campaign.KeyFeatures.Capping}</p>
              <p><strong>Redemption Fee:</strong> {campaign.KeyFeatures.RedemptionFee}</p>
              <p><strong>Milestone:</strong> {campaign.KeyFeatures.Milestone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPage;