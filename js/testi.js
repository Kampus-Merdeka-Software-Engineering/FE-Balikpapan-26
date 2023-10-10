const baseURL = "https://be-balikpapan-26-production.up.railway.app";
const renderTesti = (item) => {
    return `
    <div class="swiper-slide testimonial-card">
        <div class="testimonial-text">
            <p>${item.testimon}</p>
        </div>
        <div class="testimonial-author">
            <div class="author-info">
                <h3>${item.name}</h3>
                <p>${item.mail}</p>
            </div>
        </div>
    </div>`
}

const container = document.getElementById('testi-container')
const getData = async () => {
    try {
        const data = await fetch('https://be-balikpapan-26-production.up.railway.app/testi').then(response => response.json())
        console.log(data)
        let render = ''
        data.map(item => {
            render += renderTesti(item)
        })
        container.innerHTML = render
    } catch (error) { console.error(error) }
}

getData()

const nama = document.getElementById('nama')
const tanggal = document.getElementById('tanggal')
const email = document.getElementById('email')
const testimoni = document.getElementById('testimoni-input')
const datePost = (date) => {
    const result = new Date(date).toISOString()
    return result
}

const form = document.getElementById('form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (nama.value.length &&
        tanggal.value.length &&
        email.value.length &&
        testimoni.value.length) {
        try {
            const post = await fetch('https://be-balikpapan-26-production.up.railway.app/testi',
                {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify({
                        date: datePost(tanggal.value),
                        name: nama.value,
                        mail: email.value,
                        testimon: testimoni.value
                    })
                })
               if(post.status===201){
                alert('berhasil menambah testimoni')
                getData()
                nama.value=''
                tanggal.value=''
                email.value=''
                testimoni.value=''
               }
        } catch (error) { console.error(error) }
    }
})