![AWS](https://img.shields.io/badge/AWS-Infrastructure-232F3E?style=flat&logo=amazonaws)
![Status](https://img.shields.io/badge/Status-Active-success)
![CI/CD](https://img.shields.io/badge/CI/CD-Implemented-brightgreen)

# AWS Cloud Infrastructure & Automation Portfolio

This repository contains my production-style AWS architecture portfolio and CI automation workflows.

The website documents real infrastructure deployments built with a focus on:

- High Availability
- Multi-AZ architecture
- Automated failover
- Self-healing systems
- Secure networking
- Encryption and backup strategy
- Cost-aware design principles
- CI/CD automation & containerized artifact publishing

---

## 🌐 Portfolio Projects

### 1️⃣ High Availability 3-Tier SaaS Architecture

User → Application Load Balancer → Auto Scaling Group → EC2 → Private RDS

- Custom VPC across multiple Availability Zones
- Internet-facing ALB with health checks
- CPU-based Auto Scaling policies
- Launch Template with automated bootstrapping
- Private subnet compute layer
- Self-healing validation testing

---

### 2️⃣ RDS MySQL 8.4 Multi-AZ Deployment

- Multi-AZ synchronous replication
- db.m7g.large instance class
- gp3 storage (200 GiB, 3000 IOPS)
- Automated backups (7-day retention)
- Point-in-Time Recovery
- KMS encryption enabled
- Deletion protection
- Performance Insights & monitoring

---

### 3️⃣ Secure Static Website Hosting (S3 + CloudFront)

- Private S3 origin
- Block Public Access enforced
- Origin Access Control (OAC)
- HTTPS-only access
- CloudFront edge caching
- Lifecycle rules for cost control

---

### 4️⃣ CI Pipeline with GitHub Actions & Docker

Automated workflow triggered on push to `main`:

Local → GitHub → GitHub Actions Runner → Docker Build → Docker Hub

- YAML-based GitHub Actions workflow
- Secure secret injection for Docker authentication
- Docker image build via custom Dockerfile (nginx base)
- Automated artifact publishing to Docker Hub
- Local validation via container runtime

---

## 🛠 Tech Stack

**Cloud Infrastructure**
- Amazon EC2
- Auto Scaling Groups
- Application Load Balancer
- Amazon RDS (Multi-AZ)
- Amazon S3
- Amazon CloudFront
- VPC (public/private subnets, route tables, NAT)
- IAM & Security Groups

**Automation & DevOps**
- Git (CLI workflow)
- GitHub Actions
- CI pipeline design
- Docker
- Containerization
- Artifact publishing (Docker Hub)

---

## 📂 Repository Structure

aws-portfolio-website/
│
├── index.html
├── css/
├── js/
├── projects/
├── assets/
└── .github/workflows/
└── README.md

---

## 🚀 Next Improvements

- Automated deployment to AWS EC2 via CI/CD
- CloudFront cache invalidation workflow
- Infrastructure as Code (Terraform)
- Custom domain + HTTPS

---

## 📌 Purpose

This project demonstrates:

- Production-style AWS architecture design
- Operational validation & resilience testing
- Secure infrastructure configuration
- Foundational CI/CD automation capability