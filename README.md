# POND FOOTBALL — Interactive Web Application

โครงงานเดี่ยว: การพัฒนา Interactive Web Application ด้วยแนวคิด Graph Theory และ Tree

## วิธีเปิด
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ด้วย VS Code
3. เปิด `index.html` ด้วย Live Server หรือเปิดไฟล์โดยตรง
4. สำหรับ GitHub Pages ให้อัปโหลดไฟล์ทั้งหมดเข้า repository แล้วเปิด Pages จาก branch `main` / root

## 4 หน้า
- `index.html` — หน้าแรก/ร้านค้า
- `explore.html` — เลือกสินค้าและ Tree Navigation
- `graph.html` — Graph Theory, Adjacency List และ BFS Path
- `cart.html` — ตะกร้า/สรุปคำสั่งซื้อ

## หลักการดิสครีต
### Tree
Root = Football Store
Parent = หมวดสินค้า
Child = ประเภทสินค้า
Leaf = สินค้าปลายทาง

ตัวอย่าง Path:
Football Store → รองเท้าฟุตบอล → FG → Speed Pro FG

### Graph
Vertex:
Football, Jerseys, Boots, Ball, Gloves, Shin Guards, Accessories, Training

Edge มีมากกว่า 7 เส้น และเก็บด้วย JavaScript Adjacency List

### Path
ใช้ BFS ค้นหาเส้นทางจาก Vertex เริ่มต้นไปยัง Vertex ปลายทาง

### Weighted Graph
ใช้แนวคิดน้ำหนักของ Edge เป็นระดับความสัมพันธ์ของสินค้าในระบบจำลอง

## รูปสินค้า
ใช้รูปสินค้าจากหน้า product อย่างเป็นทางการของ Nike ผ่าน static.nike.com เพื่อให้การ์ดสินค้าแสดงภาพจริงเมื่อออนไลน์
