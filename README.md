# 🎬 تطبيق الأفلام - Movie App

تطبيق ويب تفاعلي لعرض وإدارة الأفلام باستخدام React.js و Redux Toolkit. يوفر التطبيق واجهة مستخدم عربية جميلة لعرض الأفلام الشائعة والبحث عنها.

## ✨ المميزات

- 🎭 عرض الأفلام الشائعة من قاعدة بيانات TMDB
- 🔍 البحث في الأفلام باللغة العربية
- 📄 تصفح الصفحات مع نظام ترقيم متقدم
- 🎬 عرض تفاصيل الفيلم الكاملة
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- 🌐 واجهة مستخدم باللغة العربية
- ⚡ أداء سريع مع Redux Toolkit للتحكم في الحالة

## 🛠️ التقنيات المستخدمة

### Frontend

- **React.js** - مكتبة واجهة المستخدم
- **Redux Toolkit** - إدارة حالة التطبيق (أحدث إصدار)
- **React Router** - التنقل بين الصفحات
- **React Bootstrap** - مكونات واجهة المستخدم
- **Axios** - طلبات HTTP
- **React Paginate** - نظام الترقيم

### APIs

- **The Movie Database (TMDB)** - قاعدة بيانات الأفلام

## 📁 هيكل المشروع

```
project-4/
├── public/
│   ├── index.html
│   ├── card_image.jpg
│   └── logo.png
├── src/
│   ├── Components/
│   │   ├── CardMovie.jsx          # بطاقة عرض الفيلم
│   │   ├── MovieDetails.jsx       # صفحة تفاصيل الفيلم
│   │   ├── MovieList.jsx          # قائمة الأفلام
│   │   ├── NavBar.jsx             # شريط التنقل
│   │   └── Pagination.jsx         # نظام الترقيم
│   ├── Redux/
│   │   ├── Action/
│   │   │   └── MovieAction.js     # إجراءات Redux
│   │   ├── Reducer/
│   │   │   └── MovieReducer.js    # مخفض Redux
│   │   ├── Store/
│   │   │   └── Store.js           # متجر Redux Toolkit
│   │   └── Types/
│   │       └── MoviesTypes.js     # أنواع الإجراءات
│   ├── App.js                     # المكون الرئيسي
│   ├── index.js                   # نقطة الدخول
│   └── index.css                  # الأنماط العامة
├── package.json
├── .gitignore
└── README.md
```

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**

   ```bash
   git clone <repository-url>
   cd project-4
   ```

2. **تثبيت التبعيات**

   ```bash
   npm install
   ```

3. **إعداد متغيرات البيئة (اختياري)**

   ```bash
   # إنشاء ملف .env.local
   REACT_APP_TMDB_API_KEY=your_api_key_here
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **تشغيل التطبيق**

   ```bash
   npm start
   ```

5. **فتح المتصفح**
   - انتقل إلى `http://localhost:3000`

## 📋 الملفات الرئيسية

### المكونات (Components)

#### `CardMovie.jsx`

- يعرض بطاقة فيلم واحدة مع معلومات أساسية
- يحتوي على تأثيرات hover جميلة
- رابط للانتقال إلى صفحة التفاصيل

#### `MovieList.jsx`

- يعرض قائمة الأفلام الرئيسية
- يتكامل مع Redux Toolkit لجلب البيانات
- يدعم عرض رسالة عند عدم وجود أفلام

#### `MovieDetails.jsx`

- صفحة تفاصيل الفيلم الكاملة
- يعرض الصورة والمعلومات والقصة
- أزرار للعودة ومشاهدة الفيلم

#### `NavBar.jsx`

- شريط التنقل مع شعار التطبيق
- حقل البحث مع وظيفة البحث المباشر
- تصميم متجاوب

#### `Pagination.jsx`

- نظام ترقيم متقدم للتنقل بين الصفحات
- يدعم التصفح باللغة العربية
- تصميم مخصص يتناسب مع التطبيق

### Redux Structure

#### `MovieAction.js`

- إجراءات جلب الأفلام والبحث والتصفح
- استخدام Axios للطلبات
- معالجة الأخطاء

#### `MovieReducer.js`

- إدارة حالة الأفلام وعدد الصفحات
- معالجة إجراءات ALLMOVIES
- تحديث الحالة بشكل صحيح

#### `MoviesTypes.js`

- تعريف الثوابت والروابط
- دعم متغيرات البيئة
- روابط API للفيلم الشائعة والبحث والترقيم

#### `Store.js`

- متجر Redux Toolkit محدث
- تكوين المخفضات
- دعم DevTools

## 🎨 التصميم والأنماط

- **اللون الرئيسي**: `#b45b35` (برتقالي)
- **الخط**: Almarai (خط عربي جميل)
- **التصميم**: متجاوب ومتأثر بالـ hover
- **الواجهة**: عربية بالكامل

## 🔧 الإعدادات المتقدمة

### متغيرات البيئة

يمكنك إضافة ملف `.env.local` لتخصيص إعدادات API:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### تخصيص API

يتم التعامل مع روابط API تلقائياً في `src/Redux/Types/MoviesTypes.js`:

```javascript
const API_KEY = process.env.REACT_APP_TMDB_API_KEY || "default_key";
const BASE_URL =
  process.env.REACT_APP_TMDB_BASE_URL || "https://api.themoviedb.org/3";
```

## 🚀 النشر على Vercel

تم حل مشاكل التوافق مع Vercel:

- إزالة `redux-devtools-extension` غير المتوافق
- تحديث إلى Redux Toolkit
- تحسين معالجة الأخطاء
- دعم متغيرات البيئة

## 📱 الميزات المستقبلية

- [ ] إضافة نظام تقييم الأفلام
- [ ] قائمة المفضلة
- [ ] فلترة الأفلام حسب النوع
- [ ] إشعارات للأفلام الجديدة
- [ ] وضع المظلم
- [ ] دعم المزيد من اللغات
- [ ] تحسين الأداء مع React Query

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الرخصة

هذا المشروع مرخص تحت رخصة MIT - راجع ملف `LICENSE` للتفاصيل.

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة، يرجى:

- فتح issue جديد
- التواصل عبر البريد الإلكتروني
- مراجعة الوثائق

---

**تم تطوير هذا المشروع بـ ❤️ باستخدام React.js و Redux Toolkit**
