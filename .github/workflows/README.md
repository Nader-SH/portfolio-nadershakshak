# CI/CD Workflows

هذا المجلد يحتوي على ملفات CI/CD للمشروع.

## Workflows المتوفرة:

### 1. `ci.yml` - Continuous Integration
- يعمل عند Push أو Pull Request
- يقوم بـ:
  - Linting
  - Building
  - Testing

### 2. `cd.yml` - Continuous Deployment
- يعمل عند Push على main/master
- يقوم بـ:
  - Build
  - Deploy إلى Vercel

**ملاحظة:** تحتاج إلى إضافة Secrets في GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 3. `quality-check.yml` - فحص جودة الكود
- يعمل عند Pull Request
- يقوم بـ:
  - ESLint
  - TypeScript check (إن وجد)
  - Build verification

### 4. `auto-deploy.yml` - Deploy تلقائي
- يعمل عند Push على main/master
- يقوم بـ:
  - Lint
  - Build
  - إنشاء deployment summary

## كيفية الإعداد:

1. اذهب إلى GitHub Repository Settings
2. اضغط على Secrets and variables > Actions
3. أضف الـ Secrets المطلوبة (لـ Vercel deployment)

## استخدام Vercel:

إذا كنت تستخدم Vercel، يمكنك:
1. ربط المشروع مع Vercel
2. الحصول على الـ tokens من Vercel Dashboard
3. إضافة الـ secrets في GitHub

## استخدام منصات أخرى:

يمكن تعديل الـ workflows لدعم:
- Netlify
- AWS
- Azure
- أي منصة أخرى

