var app = new Vue({
    el: '#app',
    data: {
        cg: {
            img1: "assets/img/cg/1-1.jpg",
            img2: "assets/img/cg/1-2.jpg",
            img3: "assets/img/cg/1-3.jpg",
            img4: "assets/img/cg/1-4.jpg",
            img5: "assets/img/cg/1-5.jpg"
        },
        movie: {
            img1: "assets/img/movie/2-1.jpg",
            img2: "assets/img/movie/2-2.jpg",
            img3: "assets/img/movie/2-3.jpg",
            img4: "assets/img/movie/2-4.jpg",
            img5: "assets/img/movie/2-5.jpg",
            vid1: "https://www.dropbox.com/s/evuc5mbfh1m6f1m/2-1.mp4?raw=1",
            vid2: "https://www.dropbox.com/s/8mnprvqjt5fpfwg/2-2.mp4?raw=1",
            vid3: "https://www.dropbox.com/s/9aaley5mh5til36/2-3.mp4?raw=1",
            vid4: "https://www.dropbox.com/s/dfdzmqlp7ttont3/2-4.mp4?raw=1",
            vid5: "https://www.dropbox.com/s/qvb5tbxyjiq2jds/2-5.mp4?raw=1"
        },
        cgv: {
            preview: {
                img1: "https://www.dropbox.com/s/m24aevhrt0jh8zz/2021-08-12_00h40_58_withQR.jpg?raw=1",
                img2: "https://www.dropbox.com/s/90muzxgp60ykfsp/2021-08-12_00h41_28.jpg?raw=1",
                img3: "https://www.dropbox.com/s/j6zsbavi0lyml5n/2021-08-12_00h50_42.jpg?raw=1",
                img4: "https://www.dropbox.com/s/3q5s6r34hertpmy/2021-08-12_00h51_43.jpg?raw=1",
                img5: "https://www.dropbox.com/s/o0332aq797xjvdo/C-0349_QR.png?raw=1",
                img6: "https://www.dropbox.com/s/a6gzfognvby9ro0/210624_2gotou_QR.png?raw=1",
                img7: "https://www.dropbox.com/s/6f21ublsqntd6gv/567_in_02_QR.png?raw=1",
                vid1: "https://www.dropbox.com/s/3zhspop0rpr706y/567_in_02.mp4?raw=1",
                vid2: "https://www.dropbox.com/s/4m394xfirqnh95z/C-0349.mp4?raw=1",
                vid3: "https://www.dropbox.com/s/o7tafp0v3c6bwh3/C-0349.mp4?raw=1",
                vid4: "https://www.dropbox.com/s/e2blb1a2gfu1kdl/210624_2gotou.mp4?raw=1"
            }
        },
        vr: {
            img1: "assets/img/vr/3-1.jpg",
            url1: "http://beforeafterkenchiku.gerrysihaj.com/"

        },
        flow: {
            url1: "https://go.chatwork.com/ja/"
        },
        modal: {
            imgPreview: "d-none",
            img: "",
            vidPreview: "d-none",
            vid: ""
        },
        faqs: faqsData,
        pcHeight: 0,
        initialScroll: 0,
        scrollMenuNo: [false, false, false, false],
        currentSection: 0,
        currentFaq: 4
    },
    computed: {
        isAllowMoreFaq() {
            return this.currentFaq + 1
        }
    },
    methods: {
        showImgPreview(e) {
            var img = e.target.dataset.img
            var tipe = img.split('.')[0]
            var url = img.split('.')[1]

            this.modal.img = this[tipe][url]

            this.modal.imgPreview = "d-block"
        },
        closeImgPreview() {
            this.modal.imgPreview = "d-none"
        },
        showVidPreview(e) {
            var vid = e.target.dataset.vid
            var tipe = vid.split('.')[0]
            var url = vid.split('.')[1]

            // return console.log(vid)

            this.modal.vid = this[tipe][url]

            this.modal.vidPreview = "d-block"


            var playVid = document.getElementById('vid')
            playVid.currentTime = 0;

            // playVid.pause();
            playVid.autoplay;
            // playVid.play();
        },
        closeVidPreview() {
            this.modal.vidPreview = "d-none"

            var playVid = document.getElementById('vid')
            playVid.currentTime = 0;
            this.modal.vid = ""
            // playVid.pause();
        },
        openNewWindow(e) {
            // return console.log(e)
            e.preventDefault();
            var el = e.target.dataset.url
            var tipe = el.split('.')[0]
            var url = el.split('.')[1]
            
            return window.open(this[tipe][url])
        },
        goSection(section) {
            section = section
            window.scrollTo(0, (section * this.pcHeight))

            this.scrollMenuNo = [false, false, false, false]
            this.scrollMenuNo[section] = true
            this.currentSection = section

        },
        increaseFaq() {
            this.currentFaq +=4
        }
    },
    created() {
        this.pcHeight = window.innerHeight
        this.initialScroll = window.scrollY

        // if(this.initialScroll < this.pcHeight) {
        //     this.scrollMenuNo[0] = true
        //     this.currentSection = 0
        // }else if(this.initialScroll >= this.pcHeight && this.initialScroll <= (this.pcHeight*2)-1) {
        //     this.scrollMenuNo[1] = true
        //     this.currentSection = 1
        // }else if(this.initialScroll >= this.pcHeight && this.initialScroll <= (this.pcHeight*3)-1) {
        //     this.scrollMenuNo[2] = true
        //     this.currentSection = 2
        // }else if(this.initialScroll >= this.pcHeight && this.initialScroll <= (this.pcHeight*4)-1) {
        //     this.scrollMenuNo[3] = true
        //     this.currentSection = 3
        // }

        // window.addEventListener("wheel", event => {
        //     if(event.deltaY == 100) {
        //         if(this.currentSection < 3) {
        //             this.goSection(this.currentSection+1)
        //             // console.log('bisa turun')
        //         }else{
        //             // console.log('mentok')
        //         }
        //     }else if(event.deltaY == -100) {
        //         if(this.currentSection > 0) {
        //             this.goSection(this.currentSection-1)
        //             // console.log('bisa naik')
        //         }else{
        //             // console.log('mentok')
        //         }
        //     }

        // });

        // new
        window.addEventListener("keydown", event => {
            if(event.keyCode == 40) {
                if(this.currentSection < 3) {
                    this.goSection(this.currentSection+1)
                    // console.log('bisa turun')
                }else{
                    // console.log('mentok')
                }
            }else if(event.keyCode == 38) {
                if(this.currentSection > 0) {
                    this.goSection(this.currentSection-1)
                    // console.log('bisa naik')
                }else{
                    // console.log('mentok')
                }
            }else if(event.keyCode == 27) {
                this.closeImgPreview()
                this.closeVidPreview()
            }
        })

    }
})
