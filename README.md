<div align="center">

```
  ____        _          _____                 
 |  _ \ _   _| |___  ___|_   _| __ __ _  ___ ___ 
 | |_) | | | | / __|/ _ \ | || '__/ _` |/ __/ _ \
 |  __/| |_| | \__ \  __/ | || | | (_| | (_|  __/
 |_|    \__,_|_|___/\___| |_||_|  \__,_|\___\___|
```

### Intelligent Incident Intelligence & Real-Time Telemetry Platform

An enterprise-grade, high-concurrency platform engineered for zero-latency error tracking, Gemini AI root-cause diagnostics, and automated incident workflows.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16.2_(App_Router)-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM_6-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Upstash Redis](https://img.shields.io/badge/Upstash-Redis-00E699?style=for-the-badge&logo=redis&logoColor=white)](https://upstash.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_Flash-8E75C2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## 🌟 Executive Summary

**PulseTrace** is a next-generation incident management and real-time observability platform designed to withstand heavy concurrency without performance degradation. It captures uncaught runtime exceptions and stack traces from client SDKs, correlates deployment signals via GitHub webhooks, synthesizes instant root-cause diagnostics using **Google Gemini AI**, and dispatches live telemetry to engineering command centers via **Server-Sent Events (SSE)**.

Architected with connection multiplexing, Redis pub/sub bridges, and proactive queue throttling, PulseTrace guarantees enterprise reliability during major service disruptions.

---

## ⚡ Core Capabilities

| Feature | Description | Architecture Highlight |
|---|---|---|
| **⚡ High-Throughput Telemetry** | Handles bursty error ingest storms without database exhaustion | Redis-backed sliding-window rate limiting & connection pooling |
| **🤖 Gemini AI Root-Cause Analysis** | Auto-generates diagnoses, code-level fix recommendations, and severity scores | Throttled background execution queue with 15 RPM safety buffer |
| **📡 Real-Time SSE Streams** | Live incident feeds and metrics broadcast to developer dashboards | Memory-capped Server-Sent Events with automatic garbage collection |
| **🏢 Multi-Tenant RBAC** | Strict role-based isolation for **Admins**, **Managers**, and **Developers** | Middleware JWT auth guards and organization tenancy validation |
| **📬 Throttled SMTP Notifications** | Batched dispatch for automated alert emails and team invites | Adaptive batching (5 emails / 20s) preventing provider spam blocks |
| **🔗 GitHub CI/CD Sync** | Ingest webhook payloads to automatically map issues to deployments | Webhook signature verification and linked repository tracking |

---

## 🏗️ System Architecture

```
[ Client Applications ]       [ GitHub CI/CD ]
          │                          │
          ▼ (@pulsetrace/sdk)        ▼ (Webhooks)
   ┌──────────────────────────────────────────────┐
   │            PulseTrace Edge Gateway           │
   │  • Bearer Token / API Key Authentication     │
   │  • Origin Validation & Payload Sanitization  │
   └──────────────────────┬───────────────────────┘
                          │
                          ▼
   ┌──────────────────────────────────────────────┐
   │          Upstash Redis Broker & Cache        │
   │  • Sliding-Window Rate Limiting              │
   │  • Ingest Queue Multiplexing                 │
   │  • Cross-Process Event Bus                   │
   └──────────┬────────────────────────┬──────────┘
              │                        │
              ▼                        ▼
 ┌─────────────────────────┐  ┌─────────────────────────┐
 │    PostgreSQL (Neon)    │  │    Google Gemini AI     │
 │  • Prisma ORM Pool      │  │  • Automated Diagnostics│
 │  • Multitenant Schema   │  │  • Suggested Fixes      │
 └────────────┬────────────┘  └────────────┬────────────┘
              │                            │
              └──────────────┬─────────────┘
                             │
                             ▼
   ┌──────────────────────────────────────────────┐
   │       Real-Time Broadcast Engine (SSE)       │
   │  • Auto-Reconnecting Client Streams          │
   │  • Instant Incident Dispatch                 │
   └──────────────────────┬───────────────────────┘
                          │
                          ▼
            [ Engineering Dashboards ]
      (Admin • Team Manager • Developer)
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** or **[Bun](https://bun.sh/)** (recommended)
- **PostgreSQL** instance (Neon, Supabase, or self-hosted)
- **Upstash Redis** REST URL and Token
- **Google Gemini API Key**

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-org/pulsetrace.git
cd pulsetrace

# Using Bun (Recommended)
bun install

# Or using npm
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:

```env
# Database Configuration (Neon connection pooling recommended)
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require&connection_limit=10"

# JWT Secret for Session & Auth Cookies
JWT_SECRET="your_production_grade_jwt_secret"

# Upstash Redis (REST API)
UPSTASH_REDIS_REST_URL="https://your-upstash-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your_upstash_token"

# Google Gemini AI SDK
GEMINI_API_KEY="your_gemini_api_key"

# Email Configuration (SMTP / Gmail)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="alerts@yourdomain.com"
SMTP_PASS="your_smtp_app_password"
SMTP_FROM="alerts@yourdomain.com"

# Public App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Database Migration & Prisma Generation
```bash
# Push schema changes to your database
bun x prisma db push
bun x prisma generate

# Or with npx
npx prisma db push
npx prisma generate
```

### 4. Run Development Server
```bash
bun dev
# Or: npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to access the landing page and telemetry console.

### 5. Build for Production
```bash
bun run build
bun run start
# Or: npm run build && npm run start
```

---

## 📦 SDK Quick Start

Integrate PulseTrace into your applications in seconds:

```bash
npm install @pulsetrace/sdk
```

```typescript
import { PulseTrace } from '@pulsetrace/sdk';

// Initialize in your application bootstrap
PulseTrace.init({
  apiKey: 'pt_live_xxxxxxxxxxxxxxxx',
  environment: 'production',
  autoCapture: true,
});

// Manual exception capture
try {
  await executeCriticalOperation();
} catch (error) {
  PulseTrace.captureException(error, {
    tags: { service: 'billing-service', priority: 'critical' }
  });
}
```

---

## 📈 Concurrency & Load Testing

PulseTrace includes a built-in stress-testing harness to benchmark telemetry throughput and SSE connection stability under load:

```bash
# Execute load simulation across 100+ simulated concurrent workers
npx tsx scripts/load-test.ts
```

The test validates:
- Ingestion endpoint rate-limiting and connection multiplexing
- Live SSE broadcast memory footprint
- Database connection pool queue saturation handling

---

## 🛡️ Security & Compliance

- **HTTP-Only Cookies:** Auth tokens stored with strict SameSite and Secure flags.
- **Payload Sanitization:** DOMPurify and strict Zod validation schema guards on all write surfaces.
- **Connection Guards:** Built-in connection pool cap prevention for PostgreSQL and Redis pipelines.
- **Zero Raw Secrets:** Ingest API keys hashed using SHA-256 with salted storage.

---

<div align="center">
  <p>© 2026 PulseTrace Systems. Designed for high-resilience engineering teams.</p>
</div>
