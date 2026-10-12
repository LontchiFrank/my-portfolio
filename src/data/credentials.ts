export const credlyProfile = "https://www.credly.com/users/fodjo-frank/badges/credly";
export const microsoftProfile = "https://learn.microsoft.com/en-us/users/fodjofrank-1353/";

export type Credential = {
  title: string;
  provider: "Credly" | "Microsoft Learn";
  kind: string;
  date: string;
  image: string;
  url: string;
};

// Public profile snapshot, checked 6 October 2026. Only visible earned items
// are listed; Microsoft module completions are not professional certifications.
const googleBadges = [
  ["Set Up an App Dev Environment on Google Cloud Skill Badge", "2024-11-11", "42326d44-14ff-4eda-b9c5-7d8f12919253/image.png", "a89cea7b-5c92-4467-9bf7-c4138091617f"],
  ["Build a Website on Google Cloud Skill Badge", "2024-09-28", "cfcacbf1-1f76-40ad-be09-a5b057e31ebf/image.png", "30394f14-7a81-487b-aa9e-93a1d0a4427c"],
  ["Implement Cloud Storage and Data Protection Solutions", "2024-09-12", "88e2d83e-e9ab-4615-a98b-c8536869e4e6/blob", "ef814d00-810f-49ef-bf98-6b51a254342d"],
  ["Use APIs to Work with Cloud Storage Skill Badge", "2024-09-12", "0c6a247d-8bbd-407b-8f83-dd863d251587/image.png", "973f8cb3-5666-4259-af28-2cab444f7772"],
  ["Networking Fundamentals on Google Cloud Skill Badge", "2024-09-07", "6edf3d92-7a1f-425f-aa2b-d17223df9cf7/image.png", "0c4c79eb-f724-446f-bf8f-405d8019a465"],
];

// Title, course slug, artwork path, completion date (as displayed on profile).
const microsoftModules = [
  ["Create, configure, and manage identities", "create-configure-manage-identities", "learn/achievements/create-configure-and-manage-identities", "2026-08-17"],
  ["Understand Microsoft Entra ID", "understand-azure-active-directory", "training/achievements/azure-active-directory-explore", "2026-08-17"],
  ["Explore identity in Microsoft Entra ID", "explore-identity-azure-active-directory", "training/achievements/explore-identity-azure-active-directory", "2026-08-17"],
  ["Configure Microsoft Defender Vulnerability Management settings for Azure VMs", "configure-defender-vulnerability-management", "training/achievements/generic-badge", "2026-08-17"],
  ["Enable and configure workload protection plans in Microsoft Defender for Cloud", "enable-configure-workload-protection-plans", "training/achievements/generic-badge", "2026-08-17"],
  ["Evaluate regulatory compliance in Defender for Cloud", "evaluate-regulatory-compliance", "training/achievements/generic-badge", "2026-08-17"],
  ["Discover unprotected assets and vulnerabilities by using Microsoft Defender External Attack Surface Management", "discover-external-assets-vulnerabilities", "training/achievements/generic-badge", "2026-08-17"],
  ["Connect hybrid and multicloud environments to Microsoft Defender for Cloud", "connect-hybrid-multicloud-environments-defender", "training/achievements/generic-badge", "2026-08-17"],
  ["Implement access management for Azure resources", "implement-access-management-for-azure-resources", "learn/achievements/implement-access-management-for-azure-resources", "2026-08-17"],
  ["Understand identity architecture for AI workloads", "entra-ai-understand", "training/achievements/generic-badge", "2026-08-17"],
  ["Manage Microsoft Entra Identity Protection", "manage-azure-active-directory-identity-protection", "learn/achievements/manage-azure-ad-identity-protection", "2026-08-17"],
  ["Secure your cloud apps and services with Microsoft Defender for Cloud Apps", "microsoft-cloud-app-security", "training/achievements/microsoft-cloud-app-security", "2026-08-17"],
  ["Safeguard your environment with Microsoft Defender for Identity", "m365-threat-safeguard", "training/achievements/safeguard-your-environment-with-microsoft-azure-advanced-threat-protection", "2026-08-17"],
  ["Introduction to Microsoft Defender XDR threat protection", "introduction-microsoft-365-threat-protection", "training/achievements/introduction-microsoft-365-threat-protection", "2026-08-17"],
  ["Integrate Microsoft Defender XDR with Microsoft Sentinel", "integrate-microsoft-defender-xdr-with-microsoft-sentinel", "learn/achievements/generic-badge", "2026-08-17"],
  ["Threat detection with Microsoft Sentinel analytics", "analyze-data-in-sentinel", "training/achievements/analyze-data-in-sentinel", "2026-08-17"],
  ["Perform device investigations in Microsoft Defender for Endpoint", "perform-device-investigations-microsoft-defender-for-endpoints", "training/achievements/perform-device-investigations-microsoft-defender-endpoints", "2026-08-17"],
  ["Configure and manage automation using Microsoft Defender for Endpoint", "configure-manage-automation-microsoft-defender-for-endpoint", "training/achievements/configure-manage-automation-microsoft-defender-endpoint", "2026-08-16"],
  ["Protect against threats with Microsoft Defender for Endpoint", "m365-security-threat-protect", "training/achievements/protect-against-threats", "2026-08-16"],
  ["Remediate threats using Microsoft Defender", "m365-threat-remediate", "learn/achievements/train-the-defenders", "2026-08-16"],
  ["Mitigate incidents using Microsoft Defender", "mitigate-incidents-microsoft-365-defender", "training/achievements/mitigate-incidents-in-microsoft-365-defender", "2026-08-16"],
  ["Identify security risks by using Cloud Security Posture Management", "identify-security-risks-posture-management", "training/achievements/generic-badge", "2026-08-15"],
];
const microsoftPaths = [
  ["Manage security posture by using Microsoft Defender for Cloud", "manage-security-posture-defender-cloud", "generic-trophy"],
  ["Mitigate threats using Microsoft Defender XDR", "sc-200-mitigate-threats-using-microsoft-365-defender", "mitigate-threats-using-microsoft-365-defender"],
  ["Defend against threats with Microsoft 365", "m365-security-threat-protection", "defend-against-threats-m365-microsoft-threat-protection"],
];

export const credentials: Credential[] = [
  ...googleBadges.map(([title, date, image, id]): Credential => ({ title, date, image: `https://images.credly.com/images/${image}`, url: `https://www.credly.com/badges/${id}`, provider: "Credly", kind: "Google Cloud skill badge" })),
  ...microsoftPaths.map(([title, slug, image]): Credential => ({ title, date: "2026-08-17", image: `https://learn.microsoft.com/en-us/training/achievements/${image}.svg`, url: `https://learn.microsoft.com/en-us/training/paths/${slug}/`, provider: "Microsoft Learn", kind: "Learning path trophy" })),
  ...microsoftModules.map(([title, slug, image, date]): Credential => ({ title, date, image: `https://learn.microsoft.com/en-us/${image}.svg`, url: `https://learn.microsoft.com/en-us/training/modules/${slug}/`, provider: "Microsoft Learn", kind: "Module badge" })),
];
