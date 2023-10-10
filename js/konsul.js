const baseURL = "https://be-balikpapan-26-production.up.railway.app";
const renderKonsul = (item) => {
    return ``
}

const container = document.getElementById('booking-form')
const getData = async () => {
    try {
        const data = await fetch('https://be-balikpapan-26-production.up.railway.app/konsul').then(response => response.json())
        console.log(data)
    } catch (error) { console.error(error) }
}

const no = document.getElementById('no')
const nama = document.getElementById('nama')
const phone = document.getElementById('phone')
const treatmen = document.getElementById('treatmen')
const dokter = document.getElementById('dokter')
const datePost = (date) => {
    const result = new Date(date).toISOString()
    return result
}
const reservasidate = document.getElementById('tanggal')
const complaint = document.getElementById('complaint')


const form = document.getElementById('booking-form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (no.value.length &&
        nama.value.length &&
        phone.value.length &&
        treatmen.value.length &&
        dokter.value.length &&
        reservasidate.value.length &&
        complaint.value.length) {
        try {
            const post = await fetch('https://be-balikpapan-26-production.up.railway.app/konsul',
                {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        reservationdate: datePost(reservasidate.value),
                        no: no.value,
                        name: nama.value,
                        phone: phone.value,
                        treatmen: treatmen.value,
                        dokter: dokter.value,
                        problem: complaint.value
                    })
                })
               if(post.status===201){
                alert('Reservasi berhasil')
                no.value=''
                nama.value=''
                phone.value=''
                treatmen.value=''
                dokter.value=''
                reservasidate.value=''
                complaint.value=''
               }
        } catch (error) { console.error(error) }
    }
})

