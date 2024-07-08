document.getElementById('archimedesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input dari form
    const mass = parseFloat(document.getElementById('mass').value);
    const density = parseFloat(document.getElementById('density').value);
    
    // Validasi input
    if (isNaN(mass) || isNaN(density)) {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        return;
    }
    
    // Hitung volume
    const volume = mass / density;
    
    // Tampilkan hasil
    document.getElementById('result').innerText = `Volume Objek: ${volume.toFixed(2)} m³`;
});
