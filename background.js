// Listener untuk saat ikon ekstensi diklik
chrome.action.onClicked.addListener((tab) => {
  
  // Hanya jalankan jika kita berada di halaman modem yang benar
  if (tab.url.startsWith("http://192.168.8.1/")) {
    
    // Jalankan skrip 'manager.js' di halaman tersebut
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["manager.js"],
      world: "MAIN" // Penting: agar bisa mengakses jQuery ($) dari halaman modem
    });
    
  } else {
    console.log("Ekstensi ini hanya bisa dijalankan di halaman admin modem Huawei.");
  }
});