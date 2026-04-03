// ========== KONFIGURASI TOKO (EDIT SESUAI DATA ANDA) ==========

const STORE_CONFIG = {
    // Nomor WhatsApp tujuan (pakai kode negara 62, tanpa tanda +)
    whatsappNumber: "6282136688924",
    
    // Nama toko yang tampil di header
    storeName: "PREVIEW ",
    storeTagline: "PAYMENT STORE • Powered by Yuuya",
    
    // Link logo toko (header)
    storeLogo: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/47a1ccb1-7a59-4abf-85f8-39895443006a.jpg",
    
    // Data metode pembayaran
    methods: {
        qris: {
            name: "QRIS",
            owner: "PREVIEW Payment Store",
            logoUrl: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/47a1ccb1-7a59-4abf-85f8-39895443006a.jpg",
            qrisImageUrl: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/e750cba9-ed89-4dc9-b90c-1d09007452fc.jpg"
        },
        dana: {
            name: "DANA",
            owner: "PREVIEW",
            accountNumber: "08XX",
            logoUrl: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/0dee6832-909d-419d-9a1c-6a24932ce133.jpg"
        },
        ovo: {
            name: "OVO",
            owner: "REVIEW Payment",
            accountNumber: "08XX",
            logoUrl: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/f9b8bef7-d015-4e27-acb4-18f0e5649313.jpg"
        },
        gopay: {
            name: "GOPAY",
            owner: "REVIEW Payment",
            accountNumber: "08XX",
            logoUrl: "https://i.supaimg.com/8c22b104-1e59-4273-b703-c2b48a506310/10029833-4551-497f-8d96-e350f3d29e87.jpg"
        }
    }
};