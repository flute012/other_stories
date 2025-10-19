// 功能按鈕資料（所有課次共用）
const actionButtons = [
    {
      id: 1,
      name: '文章',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-LQyZW5rpwePcj3ZtqXO1BZHET5JQkT.png&w=320&q=75',
      bgColor: 'article-bg'
    },
    {
      id: 2,
      name: '字卡',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-N45xAyyAA1PKdWLzT08vHiTdeZYna1.png&w=320&q=75',
      bgColor: 'vocab-bg'
    },
    {
      id: 3,
      name: '句型',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-gnOTLqYJxZduhYnE0iXPyZPSdADmTe.png&w=320&q=75',
      bgColor: 'pattern-bg'
    },
    {
      id: 4,
      name: '填空',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-cNlWOddxqGU4KfqpqGTaOdJdDaO2nd.png&w=320&q=75',
      bgColor: 'blank-bg'
    },
    {
      id: 5,
      name: '口說',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-LQyZW5rpwePcj3ZtqXO1BZHET5JQkT.png&w=320&q=75',
      bgColor: 'speaking-bg'
    },
    {
      id: 6,
      name: '測驗',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-N45xAyyAA1PKdWLzT08vHiTdeZYna1.png&w=320&q=75',
      bgColor: 'test-bg'
    },
    {
      id: 7,
      name: '練習',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-gnOTLqYJxZduhYnE0iXPyZPSdADmTe.png&w=320&q=75',
      bgColor: 'practice-bg'
    },
    {
      id: 8,
      name: '複習',
      icon: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-cNlWOddxqGU4KfqpqGTaOdJdDaO2nd.png&w=320&q=75',
      bgColor: 'review-bg'
    }
  ];
  
  // 冊次資料（每冊包含 12 課）
  const booksData = [
    {
      id: 1,
      name: '第一冊',
      image: 'https://i.pinimg.com/736x/b0/23/a6/b023a6e17de086ee5ba830c33df068d0.jpg',
      lessons: [
        { code: 'L01', title: 'Journeys to the Planet Mars or Our Mission to Ento', bgImage: 'https://i.pinimg.com/736x/22/01/4b/22014ba67fa1c9ff99507da9f5a9cb18.jpg' },
        { code: 'L02', title: 'Christmas Stories', bgImage: 'https://i.pinimg.com/736x/34/6c/21/346c217d462b5ac79a9d32fba320549a.jpg' },
        { code: 'L03', title: 'Life of Edwin Forrest', bgImage: 'https://i.pinimg.com/736x/cb/6d/dc/cb6ddc56cea57dbddbb7211651f6e7af.jpg' },
        { code: 'L04', title: 'History of the Reformation in Europe in the Time of Calvin', bgImage: 'https://i.pinimg.com/736x/26/b5/dc/26b5dc71fddae41532d5b329a3fba721.jpg' },
        { code: 'L05', title: 'The Bridges of Madison County', bgImage: 'https://i.pinimg.com/1200x/29/72/a7/2972a79a6c0d506111980ed4ed468ef8.jpg' },
        { code: 'L06', title: 'Sense And Sensibility', bgImage: 'https://i.pinimg.com/1200x/24/4f/43/244f43c8d21433a2cb414bce273ae4c1.jpg' },
        { code: 'L07', title: 'New Moon', bgImage: 'https://i.pinimg.com/1200x/84/c4/68/84c468ccc7be28513d72a57a51c63b19.jpg' },
        { code: 'L08', title: 'Artemis Fowl:The Arctic Incident', bgImage: 'https://i.pinimg.com/736x/82/fd/aa/82fdaafe57a304c783c73b09b04cf505.jpg' },
        { code: 'L09', title: 'The Lost World', bgImage: 'https://i.pinimg.com/736x/65/f9/8f/65f98f3b8814618cfa3cefbc8cf42826.jpg' },
        { code: 'L10', title: 'Pickwick Papers', bgImage: 'https://i.pinimg.com/736x/ee/17/0a/ee170a990878cde5204706902c23f78c.jpg' },
        { code: 'L11', title: 'THE RETURN OF SHERLOCK HOLMES', bgImage: 'https://i.pinimg.com/1200x/cc/26/50/cc26504626c81c6d7a79dbd038a5f804.jpg' },
        { code: 'L12', title: 'My Life: the story of a provincial', bgImage: 'https://i.pinimg.com/736x/1f/70/d9/1f70d9c98a5deeb37bcf0abec6905505.jpg' }
      ]
    },
    {
      id: 2,
      name: '第二冊',
      image: 'https://i.pinimg.com/736x/53/a6/fd/53a6fd3751b7927639160b8151b824d2.jpg',
      lessons: [
        { code: 'L01', title: 'The History of Mr. Polly', bgImage: 'https://i.pinimg.com/736x/40/75/04/40750487b08601c4a61826391397bd3d.jpg' },
        { code: 'L02', title: "The Tragedy of Pudd'n head Wilson", bgImage: 'https://i.pinimg.com/1200x/b0/f3/bb/b0f3bb73d341790927e0300ca7f2f877.jpg' },
        { code: 'L03', title: 'TOWARDS ZERO', bgImage: 'https://i.pinimg.com/736x/7f/89/9c/7f899c7d8c44f022b22487eb4fbd8ad4.jpg' },
        { code: 'L04', title: 'The Kamogawa Food Detectives', bgImage: 'https://i.pinimg.com/736x/c0/a7/0a/c0a70a91360924998007584026bca08c.jpg' },
        { code: 'L05', title: 'Red Sorghum', bgImage: 'https://i.pinimg.com/1200x/1a/06/a0/1a06a07d95d687677e1f49415ffb849c.jpg' },
        { code: 'L06', title: 'Meadow Brook', bgImage: 'https://i.pinimg.com/736x/ee/3b/37/ee3b37a10171d6cc3c6483e158e32ef6.jpg' },
        { code: 'L07', title: 'Great Possessions', bgImage: 'https://i.pinimg.com/736x/c0/dd/71/c0dd715784f4961d381cf1aba32330fa.jpg' },
        { code: 'L08', title: 'The Adventures of Dora Bell, Detective', bgImage: 'https://i.pinimg.com/736x/94/1e/f7/941ef7ec114aec0239520caaaa2614be.jpg' },
        { code: 'L09', title: 'The Jimmyjohns', bgImage: 'https://i.pinimg.com/originals/c2/b1/25/c2b1257e40cc6d4172619fee78814159.gif' },
        { code: 'L10', title: 'The Adventure of the Christmas Pudding', bgImage: 'https://i.pinimg.com/originals/92/1f/4e/921f4ee8709e4eac00a9d2dedcc23eda.gif' },
        { code: 'L11', title: 'Cat Among the Pigeons', bgImage: 'https://i.pinimg.com/736x/7b/8c/06/7b8c06b4bcbb581a6496f8450197bf53.jpg' },
        { code: 'L12', title: 'Taken at the Flood', bgImage: 'https://i.pinimg.com/1200x/9e/75/81/9e7581d63fa97635ab6717107cd61799.jpg' }
      ]
    },
    {
      id: 3,
      name: '第三冊',
      image: 'https://i.pinimg.com/736x/c4/1f/76/c41f7636263c7fe4175bdc2de32dde07.jpg',
      lessons: [
        { code: 'L01', title: 'A Modern Theory of Ethics', bgImage: 'https://i.pinimg.com/736x/66/eb/7f/66eb7f699005a464664d168b7ead86bc.jpg' },
        { code: 'L02', title: 'On the Motion of the Heart and Blood in Animals', bgImage: 'https://i.pinimg.com/736x/34/05/26/34052608370e26b6949d900feb2394ae.jpg' },
        { code: 'L03', title: 'On the Sublime and Beautiful', bgImage: 'https://i.pinimg.com/736x/78/5f/da/785fdadfc36d5f2ceaf67300c592277f.jpg' },
        { code: 'L04', title: 'Odd John: A Story Between Jest and Earnest', bgImage: 'https://i.pinimg.com/originals/45/56/0d/45560dad71606e6e02420993c4d0c419.gif' },
        { code: 'L05', title: 'Mosses from an Old Manse, and other stories', bgImage: 'https://i.pinimg.com/736x/c8/b5/2f/c8b52ff43906a53057ae1825c762d3d4.jpg' },
        { code: 'L06', title: 'Notes of a Journey From Cornhill to Grand Cairo', bgImage: 'https://i.pinimg.com/736x/81/35/85/8135856f92c9f6abd9e4b0fb873b0bf3.jpg' },
        { code: 'L07', title: 'The Party and other stories', bgImage: 'https://i.pinimg.com/736x/1f/51/b8/1f51b86b2f6283e63290b8fe27a8d4fd.jpg' },
        { code: 'L08', title: 'The Pathfinder: Or the Inland Sea', bgImage: 'https://i.pinimg.com/736x/1a/56/07/1a560707b0c87636cccb8c0914f2b5fa.jpg' },
        { code: 'L09', title: 'Penguin Island', bgImage: 'https://i.pinimg.com/736x/84/5c/e5/845ce52e9c57f3547a31dd00fc5b1339.jpg' },
        { code: 'L10', title: 'Pilgrimage to Al-Madinah and Meccah', bgImage: 'https://i.pinimg.com/1200x/ad/10/9c/ad109c09c885f81cdb9ab06d3cafb7dd.jpg' },
        { code: 'L11', title: '第三冊課程11', bgImage: 'https://i.pinimg.com/736x/fc/c9/fe/fcc9fe9b7ffce5bfded5b747435ecae3.jpg' },
        { code: 'L12', title: '第三冊課程12', bgImage: 'https://i.pinimg.com/736x/aa/1f/a8/aa1fa8fd43d2b715daedda90141f388e.jpg' }
      ]
    },
    {
      id: 4,
      name: '第四冊',
      image: 'https://i.pinimg.com/736x/fd/68/2c/fd682c78d496ab4e22f5ee9fba3dc0c7.jpg',
      lessons: [
        { code: 'L01', title: 'The Pathfinder: Or the Inland Sea', bgImage: 'https://i.pinimg.com/1200x/e4/bb/44/e4bb4417eef0efc4f8aa40af25405775.jpg' },
        { code: 'L02', title: 'On the Sublime and Beautiful', bgImage: 'https://i.pinimg.com/736x/e2/ed/0a/e2ed0a0ac29d937d48f8e3df4e9936f8.jpg' },
        { code: 'L03', title: 'The Adventure of the Christmas Pudding', bgImage: 'https://i.pinimg.com/736x/20/ca/f1/20caf1016ca8e20a7caff36ea03e6eff.jpg' },
        { code: 'L04', title: 'My Life: the story of a provincial', bgImage: 'https://i.pinimg.com/736x/40/0b/b0/400bb08d90f693e213e493662f217e1f.jpg' },
        { code: 'L05', title: 'All Roads Lead to Calvary', bgImage: 'https://i.pinimg.com/736x/28/da/df/28dadf0c710f6e0a5d83cfe8cc197b10.jpg' },
        { code: 'L06', title: 'The Sun Also Rises', bgImage: 'https://i.pinimg.com/736x/95/4c/3c/954c3cbd700d45f4e31dab5c23a17b69.jpg' },
        { code: 'L07', title: 'Sam Walton: Made In America', bgImage: 'https://i.pinimg.com/736x/2a/12/31/2a1231ac2e31ba970a154d1954cd0dd7.jpg' },
        { code: 'L08', title: 'The Adventures of Roderick Random', bgImage: 'https://i.pinimg.com/736x/10/fc/6e/10fc6e605b80f9d048828105b8313cc0.jpg' },
        { code: 'L09', title: 'Tuesdays with Morrie', bgImage: 'https://i.pinimg.com/736x/28/39/fe/2839fe07c7e423ea75e9cea925c9b67c.jpg' },
        { code: 'L10', title: '第四冊課程10', bgImage: 'https://i.pinimg.com/736x/a9/bc/2a/a9bc2ac3c01a0cdc6dd0bcf4e392883d.jpg' },
        { code: 'L11', title: '第四冊課程11', bgImage: 'https://i.pinimg.com/736x/8f/81/8c/8f818cf18d7f8ee5fc4d795dabfa794e.jpg' },
        { code: 'L12', title: '第四冊課程12', bgImage: 'https://i.pinimg.com/736x/e1/e7/5a/e1e75a5d6d98e24b807de6f1834183fc.jpg' }
      ]
    }
  ];
  
  // 工具函數：取得當前冊次的課程資料
  function getLessonsForBook(bookIndex) {
    return booksData[bookIndex]?.lessons || [];
  }
  
  // 每組課次數量（用於導航點）
  const LESSONS_PER_GROUP = 3;
  
  // 根據課次索引取得對應的導航點索引
  function getDotIndex(lessonIndex) {
    return Math.floor(lessonIndex / LESSONS_PER_GROUP);
  }
  
  // 根據導航點索引取得該組的第一課索引
  function getFirstLessonIndex(dotIndex) {
    return dotIndex * LESSONS_PER_GROUP;
  }
  
  // 計算總共需要幾個導航點（基於單一冊次的 12 課）
  function getTotalDots() {
    return Math.ceil(12 / LESSONS_PER_GROUP);
  }
  
  // 匯出
  export { 
    actionButtons, 
    booksData, 
    getLessonsForBook,
    LESSONS_PER_GROUP, 
    getDotIndex, 
    getFirstLessonIndex,
    getTotalDots

  };
