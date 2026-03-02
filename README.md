![AWS](https://img.shields.io/badge/AWS-Infrastructure-232F3E?style=flat&logo=amazonaws)
![Status](https://img.shields.io/badge/Status-Active-success)
![CI/CD](https://img.shields.io/badge/CI/CD-Planned-blue)

# AWS Cloud Infrastructure Portfolio

This repository contains my production-style AWS architecture portfolio.

The website documents real infrastructure deployments built with a focus on:

- High Availability
- Multi-AZ architecture
- Automated failover
- Self-healing systems
- Secure networking
- Encryption and backup strategy
- Cost-aware design principles

The project also serves as a CI/CD practice environment and will be expanded with automated deployment workflows.

---

## 🌐 Portfolio Projects

### 1️⃣ High Availability 3-Tier SaaS Architecture

**Architecture Flow**

User → Application Load Balancer → Auto Scaling Group → EC2 → Private RDS

Key Highlights:

- Custom VPC across multiple Availability Zones
- Internet-facing ALB with health checks
- Auto Scaling Group (CPU target tracking)
- Launch Template with automated bootstrapping
- Private subnet compute layer
- Self-healing instance replacement validation

---

### 2️⃣ RDS MySQL 8.4 Multi-AZ Deployment

Production-ready database configuration with:

- Multi-AZ synchronous replication
- db.m7g.large instance class
- gp3 storage (200 GiB, 3000 IOPS)
- Automated backups (7-day retention)
- Point-in-Time Recovery
- Manual snapshot validation
- KMS encryption enabled
- Deletion protection
- Performance Insights & Enhanced Monitoring

---

### 3️⃣ Secure Static Website Hosting (S3 + CloudFront)

Secure CDN-based static hosting with:

- Private S3 origin
- Block Public Access enabled
- Origin Access Control (OAC)
- HTTPS enforcement
- CloudFront edge caching
- Lifecycle rules for cost control
- Access Denied validation for direct S3 URL

---

## 🛠 Tech Stack

- Amazon EC2
- Auto Scaling Groups
- Application Load Balancer
- Amazon RDS (Multi-AZ)
- Amazon S3
- Amazon CloudFront
- IAM & Security Groups
- VPC (public/private subnets, route tables, NAT)
- Git & GitHub
- CI/CD (planned expansion)

---

## 📂 Repository Structure

aws-portfolio-website/
│
├── index.html
├── css/
├── js/
├── projects/
├── assets/
└── README.md


---

## 🚀 Future Improvements

- GitHub Actions CI/CD pipeline
- Automated S3 deployment
- CloudFront cache invalidation workflow
- Infrastructure as Code (Terraform)
- Custom domain + HTTPS

---

## 📌 Purpose

This project is designed to:

- Demonstrate hands-on AWS architecture skills
- Showcase production-style configuration
- Serve as a foundation for CI/CD experimentation
- Act as a public portfolio for freelance cloud projects

---

## 📫 Contact

Open to AWS infrastructure and high-availability architecture projects.
