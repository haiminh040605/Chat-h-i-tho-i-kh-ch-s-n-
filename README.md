# 🏨 Grand Horizon Concierge AI - Next.js Serverless Chatbox

> Webapp Serverless cao cấp ứng dụng **Next.js (App Router)**, **OpenAI API (GPT-4o-mini)** và giao diện **Chatbox phong cách Google Dialogflow**, chuyên tư vấn dịch vụ khách sạn 5 sao và tự động thu thập thông tin khách hàng tiềm năng (Lead Generation). Sẵn sàng deploy 1-click lên **Vercel**.

---

## 🌟 Tính Năng Nổi Bật

1. **Serverless Architecture (Chuẩn Vercel Deployment)**:
   - Xây dựng trên Next.js 15 App Router với API Routes chạy dạng Serverless Functions không cần quản lý máy chủ.
   - Tối ưu hóa tốc độ phản hồi và mở rộng quy mô tức thì (Auto-scaling).

2. **OpenAI API Integration (Hỗ trợ GPT-4o-mini / Function Calling)**:
   - System Prompt đóng vai trợ lý khách sạn 5 sao lịch thiệp, chu đáo, ân cần và chuẩn xác.
   - Tích hợp **OpenAI Tool / Function Calling (`save_customer_contact`)**: Tự động nhận diện Họ tên, Số điện thoại, Email và nhu cầu đặt phòng của khách hàng để lưu vào cơ sở dữ liệu.
   - **Smart Fallback Engine**: Khi chưa cấu hình API Key hoặc khi OpenAI bận, hệ thống tự động nhận diện câu hỏi thường gặp và tự động trích xuất SĐT/Email bằng Regular Expression mà không bao giờ bị lỗi sập.

3. **Giao Diện Frontend Dialogflow Chatbox**:
   - Bong bóng tròn Dialogflow launcher ở góc phải dưới với badge thông báo "Cần tư vấn phòng?".
   - Cửa sổ chat Dialogflow với bo góc mượt mà, avatar chuyên viên Concierge, huy hiệu Online 24/7.
   - **Suggestion Chips**: Nút gợi ý câu hỏi nhanh giống hệt Dialogflow Rich Cards.
   - **Inline Lead Capture Form**: Form điền thông tin nhanh tích hợp ngay trong dòng chat khi khách có nhu cầu.
   - **Typing Indicator**: Hiệu ứng 3 chấm nảy sinh động khi trợ lý đang suy nghĩ.
   - Hỗ trợ chế độ mở rộng toàn màn hình (Expand/Minimize) và nút làm mới đoạn hội thoại.

4. **Bảng Quản Lý Khách Hàng Tiềm Năng (Leads Management)**:
   - Tích hợp sẵn Modal quản lý Leads cho lễ tân/quản lý khách sạn.
   - Hỗ trợ bấm nút **Gọi ngay** hoặc **Gửi email** trực tiếp chỉ với 1 click.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local

### 1. Yêu cầu môi trường
- Node.js version 18 trở lên.
- Trình quản lý gói `npm` hoặc `pnpm`.

### 2. Cài đặt thư viện
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env.local` từ mẫu `.env.example`:
```bash
cp .env.example .env.local
```

Mở `.env.local` và điền khóa OpenAI của bạn:
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-4o-mini
```
*(Nếu bạn chưa nạp API Key, ứng dụng vẫn hoạt động bình thường với bộ mô phỏng thông minh Smart Concierge Simulator)*.

### 4. Khởi động môi trường phát triển
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

---

## ☁️ Hướng Dẫn Deploy Lên Vercel (Serverless)

Dự án đã được cấu hình tối ưu sẵn sàng deploy lên **Vercel** chỉ với vài bước:

### Cách 1: Deploy qua Vercel Dashboard (Khuyên dùng)
1. Đẩy mã nguồn lên tài khoản GitHub / GitLab / Bitbucket của bạn:
   ```bash
   git init
   git add .
   git commit -m "Initial commit hotel concierge chatbox"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập.
3. Bấm **"Add New..."** -> **"Project"** -> Chọn repository vừa tải lên.
4. Tại mục **Environment Variables**, thêm:
   - `OPENAI_API_KEY`: Điền OpenAI API Key của bạn (`sk-...`)
   - `OPENAI_MODEL`: `gpt-4o-mini` (hoặc model tùy chọn)
5. Bấm **Deploy**. Vercel sẽ tự động build và cấp phát tên miền `*.vercel.app` miễn phí cho bạn trong vòng 1 phút!

### Cách 2: Deploy qua Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

---

## 📂 Cấu Trúc Thư Mục

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts      # Serverless Endpoint xử lý OpenAI & Function Calling
│   │   │   └── leads/route.ts     # Serverless Endpoint lưu trữ & trích xuất leads
│   │   ├── globals.css            # Tailwind & CSS styling Dialogflow
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Khách sạn Showcase Landing Page
│   ├── components/
│   │   ├── DialogflowChatWidget.tsx # Widget chat Dialogflow cao cấp
│   │   └── AdminLeadsModal.tsx    # Modal quản lý thông tin khách hàng tiềm năng
│   ├── lib/
│   │   ├── hotel-data.ts          # Tri thức 5 sao (hạng phòng, giá, tiện ích, chính sách)
│   │   └── leads-store.ts         # Serverless in-memory data store
│   └── types/
│       └── chat.ts                # TypeScript interfaces
├── vercel.json                    # Cấu hình Vercel Serverless
├── .env.example                   # Mẫu cấu hình biến môi trường
└── package.json
```

---

## 💬 Mẫu Kịch Bản Thử Nghiệm

1. **Khách hỏi giá phòng**:
   - Gõ: *"Cho mình xin giá phòng view biển"* hoặc bấm nút chip *"Bảng giá các hạng phòng"*.
2. **Khách hỏi quy định nhận/trả phòng**:
   - Gõ: *"Giờ check in và check out thế nào em?"*.
3. **Thử nghiệm tính năng Thu Thập Thông Tin (Lead Capture)**:
   - Nhắn tin tự nhiên: *"Mình tên Hoàng Tuấn, số điện thoại 0988776655, mình muốn book phòng Deluxe ngày 15/11"*.
   - Hoặc click chip *"Để lại số điện thoại tư vấn"* để mở bảng form đăng ký inline ngay trong chat.
   - Nhấn nút **Leads** ở góc phải header khung chat (hoặc thanh menu trang web) để xem thông tin đã được lưu trữ thành công!

