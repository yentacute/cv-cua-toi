# cv-cua-toi

Online CV for a Frontend Web Developer, built with **Next.js 15 + React 19 + TypeScript**, exported as a static site and deployed to GitHub Pages.

- English / Vietnamese toggle (choice is remembered)
- Responsive layout (desktop and mobile)
- "Download PDF" button: prints a clean one-page A4 version
- All content lives in one file: [`data/cv.ts`](data/cv.ts)

## Chạy local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in ./out
```

## Sửa nội dung

Mở `data/cv.ts` và thay các chỗ có `TODO`: tên, email, số điện thoại, LinkedIn, thành phố. Nội dung tiếng Anh nằm ở key `en`, tiếng Việt ở key `vi`.

## Deploy lên GitHub Pages

1. Vào **Settings → Pages** của repo, ở mục **Source** chọn **GitHub Actions**.
2. Merge vào `main`. Workflow `.github/workflows/deploy.yml` sẽ build và deploy.
3. Trang sẽ có ở `https://yentacute.github.io/cv-cua-toi/`.

## Xuất PDF

Mở trang, bấm **Download PDF** (hoặc Ctrl/Cmd + P), chọn **Save as PDF**, khổ A4, bỏ tick "Headers and footers".
