const entries = [
    {
        title: "Tân Sao Hỏa",
        description: "Một con tàu di cư chuyên chở những cư dân đầu tiên hạ cánh xuống bề mặt Hỏa Tinh nay đã được cải tạo.",
        image: "images/1.jpg"
    },


    {
        title: "Người Sao Hỏa",
        description: "Một người Hỏa Tinh có nguồn gốc là người Hoa Kỳ đến từ Trái Đất ",
        image: "images/2.jpg"

    },

    {
        title: "Star People",
        description: "Những thế hệ sau của con người đã thuộc địa hóa và chiếm đóng gần hết hành tinh trong Thái Dương Hệ. Họ đang muốn rời bỏ hệ sao của quê hương để hướng tới thế giới mới ngoài kia.",
        image: "images/3.jpg"
    },
    {
        title: "Cuộc sống của Star People",
        description: "Hai Star People nằm xem một bộ phim ba chiều bên dưới tàn tích của hệ thực vật bản địa trên thế giới thuộc địa của họ. Đối với họ, đó là một cuộc sống vô cùng hạnh phúc",
        image: "images/4.jpg"
    },


    {
        title: "Panderavis Pandora",
        description: "Một sinh vật giống chim có móng vuốt khổng lồ - là cá thể Therizinosaur đã tiến hóa, thuộc một chi khủng long Theropod ăn thực vật đã tuyệt chủng cách đây 70 triệu năm trên Trái Đất. So với các sinh vật bản địa gần đó ( chỉ có 3 chi trước), Panderavis là dấu hiệu của thế lực bí ẩn đã từng ghé thăm Trái Đất trong quá khứ",
        image: "images/5.jpg"

    },

    {
        title: "Qu - Kẻ ngoại lai",
        description: "Qu đã chiến thắng trước sự sụp đổ của Nhân Loại chỉ sau 1000 năm. Bên trái bức ảnh là một chiếc máy bay không người lái công nghệ nano, bên phải là một sinh vật truy tìm biến đổi gen. Sự cai trị của Qu kéo dài hàng triệu năm, và họ đã biến đổi tất cả các hành tinh mà họ đi qua thành những thế giới kỳ lạ, đầy rẫy những cấu trúc khổng lồ và sinh vật kỳ dị.",
        image: "images/6.jpg"
    },
    {
        title: "Nhân loại lụi tàn",
        description: "Một kim tự tháp cao hàng km đang chễm chệ trên một thế giới tĩnh lặng đến rợn người, nơi từng là nhà của hơn 4 tỷ linh hồn xấu số. Những cấu trúc khổng lồ này thông thường vẫn là một trong những đặc điểm nổi bật nhất của Qu, và chúng có thể được tìm thấy ở mọi thế giới mà những kẻ này từng đi qua.",
        image: "images/7.jpg"
    },


    {
        title: "Worm",
        description: "Hai cá thể Worm cha mẹ cùng con nhỏ",
        image: "images/8.jpg"

    },

    {
        title: "Titan",
        description: "Cao hơn 40m - một trong những chủng Hậu Nhân thông minh nhất còn sót lại trong thiên hà của chúng ta.",
        image: "images/9.jpg"
    },
    {
        title: "Predator",
        description: "Predator luôn có thói quen chạy nhảy khắp các thảo nguyên, rình rập trong các khu rừng và băng qua từng ngọn núi chỉ để truy đuổi những \"con mồi\" của chúng, một loài Hậu Nhân khác kém phát triển hơn với đôi chân giống chim.",
        image: "images/10.jpg"
    },


    {
        title: "Prey",
        description: "Một chủng loài Hậu Nhân kém phát triển thường là con mồi ưa thích của Predator",
        image: "images/11.jpg"

    },

    {
        title: "Mantelope",
        description: "Không phải tất cả những loài Hậu Nhân bị biến đổi đều rơi tình trạng bị thú hóa hoàn toàn. Một loài đơn lẻ vẫn giữ được nhân tính như Mantelope là những sinh vật vốn từng được lai tạo để trở thành những \"ca sĩ\" và những chiếc máy ghi âm sống dưới thời trị vì của Qu. ",
        image: "images/12.jpg"
    },
    {
        title: "Swimmer",
        description: "Một trong những loài Hậu Nhân thủy sinh",
        image: "images/13.jpg"
    },


    {
        title: "Lizard Herder",
        description: "Một Lizard Herder đang quan sát thế giới với đôi mắt trống rỗng khi đàn thằn lằn của anh ta ngày càng mạnh mẽ và thông minh hơn. Tương lai dường như sẽ không thuộc về anh ta.",
        image: "images/14.jpg"

    },

    {
        title: "Temptor",
        description: "Hai con Temptor đức và cái. Temptor cái có bộ phận sinh dục thon dài giống như cái hố. Khi giao phối, con đực sẽ nhảy vào như những người chơi cầu trượt.",
        image: "images/15.jpg"
    },
    {
        title: "Bone Crusher",
        description: "Thô kệch, bẩn thỉu, hôi thối như xác chết và luôn thích thể hiện tình cảm của mình bằng cách phóng uế lên người khác về cơ bản là những gì mà người ta thường nói về các Bone Crusher",
        image: "images/16.jpg"
    },


    {
        title: "Colonial",
        description: "Một phần của “cánh đồng” Colonial cho thấy cuộc sống của họ khốn khổ đến nhường nào. Những sinh vật trông có vẻ vô tổ chức này có thể sinh sản vô tình hoặc bằng cách thông thường.",
        image: "images/17.jpg"

    },

    {
        title: "Flyer",
        description: "Một tổ tiên của loài Flyer với khả năng bay bẩm sinh. Mặc dù tuy hơi xấu xí nhưng những sinh vật này có khả năng tự trao đổi chất mang lại tiềm năng tiến hóa to lớn",
        image: "images/18.jpg"
    },

    {
        title: "Hand Flapper",
        description: "Một Hand Flapper ở khu vực giao phối của mình. Trong quá trình phô trương gần như hài hước, đồng loại của anh ta đã bắt đầu mất đi khả năng thích nghi. Cuộc sống của họ sẽ là một sự tồn tại náo nhiệt, ngây ngất nhưng cuối cùng chỉ là phù du.",
        image: "images/19.jpg"
    },


    {
        title: "Blind",
        description: "Người cha Blind bên cô con gái mới một tuổi. Mặc dù biết tốt hơn hết là nên ngồi yên để tránh thu hút những kẻ săn mồi được trang bị sóng siêu âm. Những ngón tay gầy guộc của họ là dấu hiệu của một cuộc đời sống trong bóng tối.",
        image: "images/20.jpg"

    },

    {
        title: "Lopsider",
        description: "Lopsider và một số vật nuôi có nguồn gốc từ thế giới bản địa có trọng lực lớn. Việc thuần hóa hệ động vật bản địa là bước đầu tiên của Lopsiders trên con đường dài hướng tới nền văn minh của họ.",
        image: "images/21.jpg"
    },
    {
        title: "Strider",
        description: "Sinh sống trên mặt trăng của một hành tinh khí khổng lồ với lực hấp dẫn chỉ bằng 1/5 Trái Đất, Strider đã phát triển một cấu trúc xương mảnh mai và một cơ thể kéo căng đến mức khó tin để chống lại sức nặng của môi trường.",
        image: "images/22.jpg"
    },


    {
        title: "Parasite",
        description: "Một Parasite với kích thước thật. Mặc dù số phận của họ có vẻ vô vọng ở mọi khía cạnh, nhưng chính sự sống sót của họ cho thấy những giá trị chủ quan như vậy không có hiệu quả trong các vấn đề tồn tại lâu dài",
        image: "images/23.jpg"

    },

    {
        title: "Finger Fisher",
        description: "Trong vòng chưa đầy vài triệu năm, Finger Fisher đã có thể tự khẳng định mình là một loài Hậu Nhân cực kỳ nổi bật và triển vọng để phát triển tiếp. Bởi hiếm có một bãi biển nào, một hòn đảo nào hay một cửa sông nào mà không có bóng dáng xanh xao và cao lêu nghêu của họ. ",
        image: "images/24.jpg"
    },
    {
        title: "Hedonist",
        description: "Chủng loài yêu thích của Qu. Một con cái theo chủ nghĩa khoái lạc đang nằm một mình trên bãi biển, không suy nghĩ gì cả. Không có bất kỳ áp lực nào từ thế giới bên ngoài, mỗi ngày của loài này đều cứ thế êm ả trôi qua.",
        image: "images/25.jpg"
    },


    {
        title: "Insectophagi",
        description: "Insectophagi đã lặng lẽ thích nghi với một chế độ ăn côn trùng và động vật nhỏ trong suốt hàng triệu năm. Với bàn tay giờ đây cũng chỉ để đào bới và một chiếc lưỡi xúc tu được dùng để bắt sâu bọ",
        image: "images/26.jpg"

    },

    {
        title: "Spacer",
        description: "Sau 40 triệu năm, những Spacer là những “con người”  thực sự có tri giác duy nhất còn sống sót. Họ cảm thấy thoải mái trong nơi ẩn náu không trọng lượng của mình đến nỗi số phận của những người anh em họ thú tính tại những nơi khác không khiến họ bận tâm. Họ cũng rất hiếm, toàn bộ dân số của họ trong Dải Ngân Hà không vượt quá vài chục chiếc thuyền và một trăm tỷ sinh mạng..",
        image: "images/27.jpg"
    },

    {
        title: "Ruin Hunter",
        description: "Chỉ 1.000 năm sau khi Qu rời đi, Ruin Haunter lang thang giữa những tàn tích tan hoang của thành phố của Star People. Hình thức thống trị của Qu, một kim tự tháp to lớn hơn cả có thể được nhìn thấy ở phía xa.",
        image: "images/28.jpg"
    },


    {
        title: "Sự tái sinh và tuyệt chủng",
        description: "Hóa thạch của một chủng loài Hậu Nhân thủy sinh đã tuyệt chủng từ một thế giới thuộc địa bị lãng quên. Vũ trụ này không hề hay biết đến sự tồn tại của \"anh ta\", mặc cho giống loài của \"anh ta\" đã thích nghi, đã sinh sôi nảy nở và lụi tàn ngay sau khi Qu rút lui. Câu chuyện của \"anh ta\" đã cho chúng ta thấy rằng tất cả những gì còn tồn tại chắc chắn sẽ diệt vong,và chính cuộc hành trình chứ không phải cái kết mới là điều quan trọng.",
        image: "images/29.jpg"

    },

    {
        title: "Snake People",
        description: "Một Snake People ( Hậu duệ của Worm)  ở nhà, vừa đọc sách vừa hút thuốc và “nghe” những “bản nhạc mặt đất” đầy rung động. Qua cánh cửa mở có thể nhìn thấy sự hỗn loạn của thành phố.",
        image: "images/30.jpg"
    },
    {
        title: "Killer Folk ",
        description: "Một Killer Folk ( Hậu duệ của Predator) trẻ tuổi đi tham quan một trong vô số pháo đài đổ nát ở đất nước anh ta, minh chứng về lịch sử đẫm máu và đa dạng của giống loài họ. Hành tinh của Killer Folk là thiên đường của các nhà khảo cổ học. Nó có nhiều thời kỳ đen tối bị chôn vùi, nhiều nền văn hóa bị hủy hoại và nhiều vương quốc sụp đổ hơn bất kỳ thế giới nào khác.",
        image: "images/31.jpg"
    },


    {
        title: "Tool Breeder ",
        description: "Một Tool Breeder ( Hậu duệ của Swinmmer) trên rạn san hô. Công cụ là một phần không thể thiếu trong cuộc sống hàng ngày của những sinh vật này; cô ấy có thể thở dưới nước thông qua một loài giáp xác lọc oxy được gắn trên lỗ phun nước. Cô ấy cầm một khẩu súng trường có nguồn gốc từ động vật thân mềm có thể bắn ra những chiếc răng cá được biến đổi đặc biệt và bạn đồng hành của cô ấy là một con cá được tăng cường trí não đã được lập trình sẵn để tấn công. Những tòa nhà làm từ vôi hóa lấp lánh ở hậu cảnh với khả năng phát quang sinh học.",
        image: "images/32.jpg"

    },

    {
        title: "Saurosapien ",
        description: "( Hậu duệ của vật nuôi của Lizard Herder) Liệu bạn có tin khi một trong những người thừa kế Nhân Loại chúng ta thậm chí còn không phải là con người? Chính xác, họ là con cháu trực hệ của những đàn bò sát đã từng một thời sinh sôi nảy nở khắp nơi trên hành tinh này. ",
        image: "images/33.jpg"
    },
    {
        title: "Modular People",
        description: "Một Modular ( Hậu duệ của Colonial) đang xử lý một bộ phận tiêu hóa chuyên dụng bằng thuốc xịt chống loét được giữ trong “bàn tay” của nó. Lưu ý các phân đoạn khác nhau trên cơ thể nó, mỗi phân đoạn đều biến đổi từ chính một “con người”.",
        image: "images/34.jpg"
    },


    {
        title: "Pterosapien ",
        description: "Một Pterosapien ( Hậu duệ của Flyer) tạo dáng bên những tòa nhà kỳ quái của một khu nghỉ dưỡng ven biển. Chỉ mười ngày, đây sẽ là kỳ nghỉ duy nhất trong cuộc đời phù du của cô.",
        image: "images/35.jpg"

    },

    {
        title: "Asymmetric ",
        description: "Một nhà quý tộc Asymmetric (Hậu duệ của Lopsider) khỏa thân tạo dáng, để lộ cơ thể kỳ quái của mình. Thông thường, những sinh vật này mặc những bộ quần áo phức tạp trông giống như những đống tất to được nối liền với nhau.",
        image: "images/36.jpg"
    },

    {
        title: "Symbiote ",
        description: "Một Symbiote ( Hậu duệ của Parasite) tạo dáng trên một trong nhiều vật chủ của mình. Ở phía sau có thể thấy một số ngôi nhà ở nông thôn của họ, với những cánh cửa cỡ người dành cho những vật chủ thiếu suy nghĩ và những cái lỗ nhỏ hơn dành cho những chủ nhân thông minh của chúng.",
        image: "images/37.jpg"
    },


    {
        title: "Sail People ",
        description: "Một Sail People ( Hậu duệ của Finger Fisher) đi săn cùng với người bạn đồng hành đang cầm lao móc của mình. Với bản chất cực kỳ hung bạo, những người này thường xuyên sử dụng các chiến dịch săn bắn dã man để dập tắt cơn khát máu trong cuộc sống hiện đại. Hãy chú ý đến 'bàn tay' có nguồn gốc từ lưỡi của họ và sinh vật bay gần họ, thực ra là một trong những họ hàng xa của Sail People.",
        image: "images/38.jpg"

    },

    {
        title: "Satyriac ",
        description: "Khán giả Satyriac (Hậu duệ của Hedonist) trở nên cuồng nhiệt khi người biểu diễn đạt đến cao trào bài hát của mình. Những sự kiện như vậy là một phần thường ngày trong cuộc sống của Satyriac.",
        image: "images/39.jpg"
    },
    {
        title: "Bug Facer ",
        description: "Một người nổi tiếng của loài Bug Facer ( Hậu duệ của Insectophagi), được cho là cô gái xinh đẹp nhất hành tinh, tạo dáng trước một ngôi làng ven biển. Ở phía xa có thể nhìn thấy một loài thực vật giống túi khí, di tích còn sót lại từ những kẻ xâm lược bí ẩn ngoài hành tinh.",
        image: "images/40.jpg"
    },


    {
        title: "Asteromorph ",
        description: "( Hậu duệ của Spacer) Lần đầu tiên trong lịch sử, những \"Vị Thần\" đã thực sự xuất hiện. Tuy nhiên, họ lại im ắng và thờ ơ, lẳng lặng tồn tại như một bóng ma mờ mịt bí ẩn trong chính bóng tối sâu thẳm của không gian và phần còn lại của loài người. ",
        image: "images/41.jpg"

    },

    {
        title: "Gravital",
        description: "Gravital ( Hậu duệ của Ruin Haunter) – Những người tạo ta đế chế mới: “Đế chế Máy Móc” được thừa hưởng bí mật công nghệ của Star People và Qu",
        image: "images/42.jpg"
    },
    {
        title: "Cuộc xâm lăng của máy móc",
        description: "Một trường hợp hiếm hoi, cuộc xâm lược trực tiếp của Gravital vào một trong những thành phố ven biển của Killer Folk. Hầu hết cư dân của Đế Chế Thứ Hai đều bị xóa sổ trên phạm vi toàn cầu mà không cần thiết phải có những cuộc đối đầu như này",
        image: "images/43.jpg"
    },


    {
        title: "Kẻ sống sót",
        description: "Nguyên mẫu Bug Facer, được vây quanh bởi hai hậu duệ dị dạng của mình. Bên trái là một hình thái với nhiều ngón tay và dương vật, được nhân giống như một vật hiến tế ở một trong nhiều tôn giáo khác nhau. Bên phải, một tác phẩm nghệ thuật không hơn không kém, được thiết kế để dùng các ngón tay đã được sửa đổi giống như một bộ trống trong khi khuôn miệng đặc trưng ngân nga giai điệu của một bài hát nào đó.",
        image: "images/44.jpg"

    },

    {
        title: "Subject",
        description: "Những hậu duệ của Bug Facer - bị Gravital giày xéo không ngừng bằng các kỹ thuật di truyền đáng nguyền rủa mà Qu đã để lại, để rồi khai sinh ra vô số những thế hệ mới ghê tởm theo đúng nghĩa đen",
        image: "images/45.jpg"
    },

    {
        title: "Những cỗ máy khác",
        description: "… các kỹ sư của đế chế Máy Móc này dường như đã yêu những sáng tạo của họ…",
        image: "images/46.jpg"
    },


    {
        title: "Sự sụp đổ",
        description: "Asteromorph đã chiến thắng trong cuộc Đại chiến khủng khiếp nhất lịch sử và kéo dài trong suốt vài triệu năm với Gravital",
        image: "images/47.jpg"

    },

    {
        title: "Hậu chiến",
        description: "Một bức tranh giải phẫu trần trụi cho thấy những đặc điểm con người kỳ lạ của Terrestrial ( Biến thể mặt đất của Asteromorph), những sinh vật vẫn thường giấu kín bản thân sau những lớp mạn che mặt và mũ trùm đầu, với mục đích duy trì quyền uy tôn giáo tối cao của họ với các chủng loài Hậu Nhân của Tân Đế Chế.",
        image: "images/48.jpg"
    },
    {
        title: "Những cỗ máy mới",
        description: "Một công dân máy móc của Tân Đế chế. Cô ấy dường như đang diện cho mình những cánh tay phân nhánh rực rỡ, phù hợp với cả xu hướng thời trang mới nhất lẫn công nghệ cấu thành nên bản thân cô ấy. Việc những cỗ máy này chạy theo những xu hướng thời trang thoạt nhìn trông có vẻ khá kỳ lạ với độc giả chúng ta ở thời đại này, nhưng đừng bao giờ quên rằng họ cũng từng một thời mang trí tuệ của loài người.",
        image: "images/49.jpg"
    },


    {
        title: "Cuộc gặp gỡ thứ hai",
        description: "Một đại sứ Amphicephalus ( sinh vật từ nền văn minh mới ) với những con tàu vũ trụ điển hình của giống loài họ. Cấu tạo cơ thể kỳ lạ của cô ấy phản ánh một lịch sử tiến hóa phức tạp như của loài người.",
        image: "images/50.jpg"

    },

    {
        title: "Tái khám phá Trái Đất",
        description: "Vào thời điểm Trái đất được tái khám phá, Nhân Loại đã mang trong mình những khác biệt đáng kể khi so với tổ tiên họ.",
        image: "images/51.jpg"
    },
    {
        title: "Trở về",
        description: "Một con tàu không gian được gửi về Trái Đất sau hơn 560 triệu năm hoang tàn, nơi mà nay đã hoàn toàn chìm trong tĩnh lặng và đã bị lãng quên bởi lịch sử.",
        image: "images/52.jpg"
    },


    {
        title: "All Tomorrows",
        description: "Author, người đã viết nên All Tomorrows đang cầm một chiếc sọ người hóa thạch 1 tỷ năm tuổi trên tay.",
        image: "images/53.jpg"

    },

    {
        title: "End",
        description: "All Tomorrows (Tạm dịch: Tất cả những ngày mai) là một tác phẩm khoa học viễn tưởng và suy đoán tiến hoá được xuất bản năm 2006, được viết và minh hoạ bởi nghệ sĩ người Thổ Nhĩ Kì C. M. Kosemen. Tác phẩm nói về giả định sự tiến hoá của loài người trong tương lai trong một tỷ năm kể từ hiện tại. Một số loài người trong tương lai được tiến hoá thông qua tự nhiên và công nghệ gene, được thực hiện bởi con người, sau được thực hiện bởi một thực thể ngoài hàng tinh bí ẩn và siêu việt được gọi là Qu. ",
        image: "images/0.jpg"
    },





];

const ITEMS_PER_PAGE = 12;
let currentPage = 1;

function moveToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function lazyLoadImage(img) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
}


function createCards() {
    moveToTop();
    const grid = document.getElementById('collectionGrid');
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageEntries = entries.slice(startIndex, endIndex);

    grid.innerHTML = ''; // Clear existing cards

    pageEntries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = new Image();
        img.onload = function () {
            const aspectRatio = (this.height / this.width) * 100;
            const imageWrapper = card.querySelector('.image-wrapper');
            imageWrapper.style.paddingBottom = `${aspectRatio}%`;
        };
        img.src = entry.image;

        card.innerHTML = `
            <div class="image-container">
                <div class="image-wrapper">
                    <img src="${entry.image}" alt="${entry.title}"
                         onerror="this.onerror=null; this.src='images/placeholder.jpg';">
                </div>
            </div>
            <h2>${entry.title}</h2>
            <p>${entry.description}</p>
        `;

        card.addEventListener('click', () => showModal(entry));
        grid.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');



    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        createCards();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE);
    if (currentPage < totalPages) {
        currentPage++;
        createCards();
    }
});

function showModal(entry) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-image-container">
            <img src="${entry.image}" alt="${entry.title}"
                 onerror="this.onerror=null; this.src='images/placeholder.jpg';">
        </div>
        <p>${entry.description}</p>
    `;
    modal.style.display = 'block';
}


document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the cards
createCards();