const homedata = {
    headerImages:[
        require("@/Assets/images/_a60dd74e-f058-49ba-a351-b4eb69a77818.jpg").default.src,
        require("@/Assets/images/homebanner1.webp").default.src,
        require("@/Assets/images/homebanner2.webp").default.src,
    ],
    truckservices: {
        title: "خدمات ما",
        background : require("@/Assets/images/servicesbg.webp").default.src,
        driver: {
            title: "برای رانندگان",
            text: "رانندگان گرامی، با عضویت در مجموعه ما، می‌توانید به صورت آنلاین و بدون واسطه به بارهای مختلف دسترسی پیدا کنید. با امکانات پیشرفته پلتفرم، می‌توانید درخواست‌های حمل و نقل بار را مشاهده و انتخاب کنید، با صاحبان بار در ارتباط باشید و به صورت هوشمند مسیرهای حمل و نقل را برنامه‌ریزی کنید. با انضباط و مهارت خود، به ارتقای صنعت حمل و نقل کمک کنید و با ما به یک تجربه‌ی موفق و به صرفه در حمل بار دست پیدا کنید." ,
            image : require("@/Assets/images/fordrivers.png").default.src
        },
        onlineservices: {
            title: "خدمات آنلاین همه جانبه",
            subtitle: "کاوش کنید و همه‌چیز را با یک نگاه پیدا کنید! ",
            text: "خدماتی که همیشه نیاز دارید، حالا در اختیار شماست. از نزدیک‌ترین رستوران‌ها و جایگاه‌های سوخت تا هتل‌ها و مکانیک‌های سیار، همه چیز در دستان شما. با یک کلیک ساده، به جستجوی همه امکانات در دسترس خود بپردازید و بهترین خدمات را برای خودانتخاب کنید",
            image : require("@/Assets/images/onlineservices1.png").default.src,
            image2 : require("@/Assets/images/onlineservices2.png").default.src,
            image3 : require("@/Assets/images/onlineservices3.png").default.src

        },
        owner: {
            title: "برای صاحبان بار",
            text: "صاحبان بار می‌توانند با استفاده از پلتفرم ما، به صورت آنلاین و با سرعت بیشتری به رانندگان مجرب دسترسی پیدا کنند. ارسال درخواست حمل بار، پیگیری وضعیت بار، ارتباط مستقیم با رانندگان و برنامه‌ریزی هوشمند مسیرهای حمل و نقل از مزایای این پلتفرم برای صاحبان بار است. برای تجربه‌ای بهتر و مطمئن تر در حمل و نقل بارها، با ما همراه شوید.",
            image : require("@/Assets/images/barowners.png").default.src,
        },
        whyTruck: {
            title: "چرا پلتفرم  تراک",
            text: "تحت پشتیبانی فناوری‌های نوآورانه و با همکاری یک تیم متخصص، پلتفرم ما یکی از بزرگترین شبکه‌های حمل و نقل و لجستیک در کشور است. با ارائه خدمات حمل و نقل با کیفیتی بالا و کنترلی کامل بر بارها، می تواند با اهداف خود همگام شود و به موفقیت‌های فراوانی دست پیدا کند. با استفاده از این پلتفرم مدرن، صاحبان بار و رانندگان به آسانی و بهره‌وری بالاتری می‌توانند مسائل حمل و نقل را مدیریت کنند و خدماتی بهتر و مطابق با نیازهای خود دریافت کنند.",
            truckReasons:[
                {
                    subTitle : "خدمات آنلاین همه جانبه",
                    icon :require("@/Assets/images/icons-logo/6843052_communication_connect_connection_contact_global_icon 1.png").default.src,
                }, {
                    subTitle : "مکانیک سیار",
                    icon :require("@/Assets/images/icons-logo/repair_setting_setup_icon - Copy 1.png").default.src,
                }, {
                    subTitle : "آپاراتی سیار",
                    icon :require("@/Assets/images/icons-logo/6883265_automobile_tire_tires_icon 1.png").default.src,
                }, {
                    subTitle : "امنیت",
                    icon :require("@/Assets/images/icons-logo/9004766_shield_security_protection_secure_icon 1.png").default.src,
                }, {
                    subTitle : "فرایند آنلاین دریافت بار",
                    icon :require("@/Assets/images/icons-logo/8665303_dolly_cargo_icon 1.png").default.src,
                }, {
                    subTitle : "پشتیبانی 24/7",
                    icon :require("@/Assets/images/icons-logo/8678080_customer_service_fill_support_icon 1.png").default.src,
                }, {
                    subTitle : "تخفیف‌های ویژه",
                    icon :require("@/Assets/images/icons-logo/1564518_bill_discount_notes_icon 1.png").default.src,
                }, {
                    subTitle : "صدور بارنامه آنلاین",
                    icon :require("@/Assets/images/icons-logo/9044577_license_global_icon 1.png").default.src,
                },
            ],
        },
       service_target: {
            title: " عملکرد، خدمات و هدف",
           text:"از نوسانات نرخ و کاهش ظرفیت تا مسائل عملیاتیو افزایش نیازهای پایداری، صنعت حمل و نقل بار در یک دوراهی قرار دارد. به همین دلیل است که شما به شریکی نیاز دارید که در زمینه‌هایی که بیشترین اهمیت را دارند، با فناوری نوآورانه و خدمات برتر، بهترین راهکارها را ارائه دهند.",
           image : require("@/Assets/images/amalkard.png").default.src,

       } ,
        advantageSection:{
            title :"امتیازهای استفاده پلتفرم حمل‌ونقل آنلاین تراک",
            advantageCards:[
                {
                    title : "راحتی و سهولت استفاده" ,
                    text:"پلتفرم تراک با طراحی کاربری ساده و متناسب، همه‌راه‌ها را برای کاربران گشوده و امکان سفارش حمل و نقل برای صاحبان بار و رانندگان را به سادگی فراهم می‌کند.",
                },{
                    title : "پوشش گسترده" ,
                    text:"با شبکه وسیعی از رانندگان و صاحبان بار حاضر به همکاری و مقصد‌های متنوع، تراک این امکان را فراهم می کند که به راحتی انواع بارها ارسال و دریافت شود.",
                },
            ]
        }
    }
}

export {homedata}