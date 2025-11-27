# 🚀 دليل Deployment على Vercel

هذا الدليل يشرح كيفية إعداد وتفعيل الـ deployment التلقائي على Vercel.

## 📋 المتطلبات

1. حساب على [Vercel](https://vercel.com)
2. مشروع GitHub متصل
3. GitHub Repository

## 🔧 خطوات الإعداد

### 1. إنشاء Vercel Project

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط على **"Add New Project"**
3. اختر GitHub repository الخاص بك
4. اربط المشروع مع Vercel

### 2. الحصول على Vercel Tokens

#### أ. VERCEL_TOKEN:
1. اذهب إلى [Vercel Settings](https://vercel.com/account/tokens)
2. اضغط على **"Create Token"**
3. امنحه اسم (مثل: `github-actions`)
4. انسخ الـ Token

#### ب. VERCEL_ORG_ID:
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. افتح Project Settings
3. اذهب إلى **General** tab
4. انسخ **Organization ID**

#### ج. VERCEL_PROJECT_ID:
1. في نفس Project Settings
2. انسخ **Project ID**

### 3. إضافة Secrets في GitHub

1. اذهب إلى GitHub Repository
2. اضغط على **Settings** → **Secrets and variables** → **Actions**
3. اضغط على **New repository secret**
4. أضف الـ Secrets التالية:

```
VERCEL_TOKEN = [الـ Token الذي نسخته]
VERCEL_ORG_ID = [Organization ID]
VERCEL_PROJECT_ID = [Project ID]
```

## 🎯 أنواع الـ Deployment

### Production Deployment
- يعمل تلقائياً عند Push على `main` أو `master`
- يتم النشر على Production URL
- الملف: `.github/workflows/vercel-deploy.yml`

### Preview Deployment
- يعمل عند فتح Pull Request
- ينشئ Preview URL لكل PR
- يمكن رؤية التغييرات قبل الدمج

## 📝 ملفات الإعداد

### `vercel.json`
- يحتوي على إعدادات Vercel
- Framework: Next.js
- Security headers
- Routing rules

### `.github/workflows/vercel-deploy.yml`
- GitHub Actions workflow
- يقوم بـ:
  - Build
  - Deploy to Production (على main/master)
  - Deploy Preview (على PR)

## ✅ التحقق من الـ Deployment

بعد إضافة الـ Secrets:

1. ادفع تغييرات إلى `main` branch
2. اذهب إلى **Actions** tab في GitHub
3. راقب الـ workflow
4. بعد اكتمال الـ deployment، اذهب إلى Vercel Dashboard
5. ستجد المشروع منشوراً على: `https://portfolio-nadershakshak.vercel.app`

## 🔍 Troubleshooting

### المشكلة: Deployment فشل
**الحل:**
- تأكد من أن الـ Secrets صحيحة
- تحقق من أن VERCEL_TOKEN صالح
- تأكد من أن Project ID و Org ID صحيحين

### المشكلة: Build فشل
**الحل:**
- تحقق من `package.json` scripts
- تأكد من أن جميع dependencies موجودة
- راجع build logs في Vercel Dashboard

### المشكلة: Preview لا يعمل
**الحل:**
- تأكد من أن VERCEL_TOKEN له صلاحيات كافية
- تحقق من أن المشروع مربوط بشكل صحيح

## 📚 روابط مفيدة

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel GitHub Action](https://github.com/amondnet/vercel-action)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🎉 بعد الإعداد

بعد إكمال الإعداد:
- ✅ كل Push على main → Deploy تلقائي
- ✅ كل PR → Preview deployment
- ✅ Build checks تلقائية
- ✅ Deployment status في GitHub

---

**ملاحظة:** تأكد من أن جميع الـ Secrets موجودة قبل Push!

