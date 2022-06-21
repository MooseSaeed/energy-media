<template>
  <section class="text-center">
    <h2
      id="aboutus"
      class="text-white text-4xl font-bold leading-relaxed mb-10"
    >
      اعرف <span class="bg-black px-2 py-1 text-red-500">عنا</span>
    </h2>

    <div class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <Card class="rounded-xl">
          <article
            class="post-card text-white bg-gradient-to-r shadow-md shadow-black from-slate-800 to-gray-900 transition-all duration-1000 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
          >
            <div class="py-6 px-5 lg:flex">
              <div class="flex-1 lg:mr-8 self-center">
                <img
                  src="../../assets/images/energythumbnail.png"
                  alt="Blog Post illustration"
                  class="rounded-xl object-cover"
                />
              </div>

              <div class="flex-1 flex flex-col justify-between">
                <header class="mt-8 lg:mt-0">
                  <div class="mt-4 card-info">
                    <a href="/">
                      <h1 class="text-3xl text-red-500 font-bold">
                        انرچي للإنتاج الإعلامى
                      </h1>
                    </a>
                  </div>
                </header>

                <div class="card-info text-md mt-2 text-right space-y-2">
                  <p>
                    فريق إنتاج تقني شامل من المتخصصين مجهزين بأحدث التقنيات
                    لإنشاء جميع مقاطع الفيديو بطريقة فريدة ومبتكرة.
                  </p>
                  <p>
                    سامح محمد عصام ، مبتكر الشركة ، خريج الأكاديمية الدولية
                    للهندسة وعلوم الإعلام - قسم إنتاج الأفلام. عمل مساعد مخرج في
                    فيلم "العريف" بطولة مجدي كامل وإيناس النجار ، ومساعد مخرج في
                    قناة (دى ام سى).
                  </p>
                </div>

                <footer
                  class="flex flex-col sm:flex-row justify-between items-center mt-8"
                >
                  <div></div>

                  <a href="#gettobusiness">
                    <Secondarybtn class="mt-4 cursor-pointer">
                      اعرف اكتر
                    </Secondarybtn>
                  </a>
                </footer>
              </div>
            </div>
          </article>
        </Card>
        <div class="mt-10 text-white w-full text-left">
          <div class="md:flex flex-row space-between text-right">
            <div class="md:border-r-2 flex-1 prose prose-invert md:pr-5">
              <h3>:فريق مكون من</h3>
              <ul>
                <p>مخرجين</p>
                <p></p>
                <p>مديرين تصوير فوتوغرافي ومونتيري</p>
                <p></p>
                <p>مهندسين صوت</p>
                <p></p>
                <p>مصممين جرافيك</p>
                <p></p>
                <p>مطورين مواقع</p>
                <p></p>
              </ul>
            </div>
            <div class="flex-1 prose prose-invert">
              <h3>
                :نقدم لكم خدمات الإعلام والإعلان والترويج لمختلف المجالات مثل
              </h3>
              <ul>
                <p>إعلانات ممولة</p>
                <p></p>
                <p>إعلانات لمنتجات او افتتاح</p>
                <p></p>
                <p>تنفيذ برامج و أفلام قصيرة و وثائقية</p>
                <p></p>
                <p>مشاريع تخرج للطلبة</p>
                <p></p>
                <p>تنفيذ كليبات لمغنيين و براندات</p>
                <p></p>
                <p>إدارة صفحات السوشيال ميديا و ترويج محتوياتها</p>
                <p></p>
                <p>غطية إيفينتات و حفلات و مؤتمرات وندوات</p>
                <p></p>
                <p>تصميم مواقع / برمجة مواقع</p>
                <p></p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Secondarybtn from "../Secondarybtn.vue";
import Card from "../Card.vue";

export default {
  components: {
    Secondarybtn,
    Card,
  },
};
</script>

<style></style>
