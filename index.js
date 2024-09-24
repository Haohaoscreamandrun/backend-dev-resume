// panel switch
  let options = document.querySelectorAll('.panel-option')
  let resume = document.querySelectorAll('.resume')
  let project = document.querySelector('.project')
  let blogs = document.querySelector('.blogs')
  options.forEach(option =>{
    option.addEventListener('click', ()=>{
      options.forEach(element=>element.classList.remove('active'))
      option.classList.add('active')
      if (option.innerText === 'Resume'){
        resume.forEach(element=>element.hidden = false)
        project.hidden = true
        blogs.hidden = true
      }else if(option.innerText === 'Project'){
        resume.forEach(element => element.hidden = true)
        project.hidden = false
        blogs.hidden = true
      } else if (option.innerText === 'Blog'){
        resume.forEach(element => element.hidden = true)
        project.hidden = true
        blogs.hidden = false
      }
    })
  })

  
  let downLoadBtn = document.getElementById('downLoad')
  let panel = document.getElementById('panel')
  let clampWords = document.querySelectorAll('.gray-block-word')
  
  // Function to handle the intersection
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('line-clamp-2');
      } else {
        // Add the class when element is out of view
        entry.target.classList.add('line-clamp-2');
      }
    })
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
  });

  // toggle clamp
  clampWords.forEach(clampWord =>{
    clampWord.addEventListener('click', ()=>{
        clampWord.classList.toggle('line-clamp-2')
      })
    observer.observe(clampWord)
  })
  
  // pdf download
  downLoadBtn.addEventListener('click', async()=>{
    // hide downloadIcon and show spinner
    let spinnerIcon = document.getElementById('spinnerIcon')
    let downloadIcon = document.getElementById('downloadIcon')
    downloadIcon.hidden = true
    spinnerIcon.hidden = false
    // unhide all elements
    clampWords.forEach(clampWord => {
      clampWord.classList.add('lg:line-clamp-2')
      clampWord.classList.remove('lg:line-clamp-2')
    })
    resume.forEach(element => element.hidden = false)
    project.hidden = false
    blogs.hidden = false
    panel.hidden = true

    let canvas = await html2canvas(document.body, { 
      windowWidth: 1500,
      windowHeight: 4000,
      scrollY: 0
     })
    let imgData = canvas.toDataURL('image/png')

    let pdf = new jsPDF('p', 'mm', 'a4')
     // Set the Helvetica font
    // pdf.setFont("helvetica", 'italic');
    // console.log("Show all fonts in jsPDF:", pdf.getFontList())

    const imgWidth = 210; // A4 width in mm
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    const totalPageSize = Math.ceil(imgHeight / pageHeight)
    let yPosition = 10

    pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight)

    for (let pageIndex = 1; pageIndex < totalPageSize; pageIndex++){
      yPosition = -pageIndex * pageHeight + 10
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight)
    }


    pdf.save('CV_hao_chen.pdf');
  
    downloadIcon.hidden = false
    spinnerIcon.hidden = true

    resume.forEach(element => element.hidden = false)
    resume.hidden = true
    blogs.hidden = true
    panel.hidden = false
  })