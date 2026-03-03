import React, { useEffect, useState, useRef } from 'react';

const translations: Record<string, string> = {
  // HomePage
  'InHouse Community': 'مجتمع إنهاوس',
  'League & Valorant': 'ليج و فالورانت',
  'Join competitive InHouse matches, climb the tier system, and prove your skills in organized 5v5 games': 'انضم إلى مباريات إنهاوس التنافسية، اصعد نظام الفئات، وأثبت مهاراتك في ألعاب 5v5 منظمة',
  'Join Discord Server': 'انضم إلى سيرفر ديسكورد',
  'Learn More': 'اعرف المزيد',
  'Choose Your Game': 'اختر لعبتك',
  'League of Legends': 'ليج أوف ليجيندز',
  'Valorant': 'فالورانت',
  '5v5 competitive matches on Summoner\'s Rift': 'مباريات تنافسية 5v5 على Summoner\'s Rift',
  'Tactical 5v5 character-based shooter': 'لعبة تصويب تكتيكية 5 ضد 5 مبنية على الشخصيات',
  'Competitive Matches': 'مباريات تنافسية',
  'Participate in organized InHouse 5v5 matches with balanced teams and fair competition. Every game counts toward your ranking.': 'شارك في مباريات إنهاوس 5v5 منظمة مع فرق متوازنة ومنافسة عادلة. كل لعبة تساهم في ترتيبك.',
  'Tier System': 'نظام الفئات',
  'Progress through our tier system based on your in-game rank. Tier 1 for Diamond+ and Tier 2 for Gold to Emerald players.': 'تقدم من خلال نظام الفئات الخاص بنا بناءً على رتبتك في اللعبة. الفئة 1 لاعبو Diamond+ والفئة 2 لاعبو Gold to Emerald.',
  'Active Community': 'مجتمع نشط',
  'Join a thriving community of League of Legends and Valorant players. Make friends, form teams, and compete together.': 'انضم إلى مجتمع مزدهر من لاعبي League of Legends و Valorant. اصنع الأصدقاء وشكل الفرق وتنافس معاً.',

  // InHousePage
  'What is InHouse?': 'ما هو إنهاوس؟',
  'InHouse is a competitive gaming system where players participate in organized 5v5 matches within our community. Experience fair, balanced games with players of similar skill levels.': 'InHouse هو نظام ألعاب تنافسي حيث يشارك اللاعبون في مباريات 5v5 منظمة داخل مجتمعنا. جربة ألعاب عادلة ومتوازنة مع لاعبين بمستويات مهارة مماثلة.',
  'Competitive Environment': 'بيئة تنافسية',
  'All matches are played with serious intent to win. Our system ensures balanced teams based on player skill and rank, creating competitive and exciting games every time.': 'يتم لعب جميع المباريات برغبة جادة في الفوز. يضمن نظامنا فرق متوازنة بناءً على مهارة اللاعب والرتبة، مما ينشئ ألعاب تنافسية ومثيرة في كل مرة.',
  'Balanced team composition': 'تكوين فريق متوازن',
  'Ranked-based matchmaking': 'المطابقة بناءً على الرتبة',
  'Points and rewards system': 'نظام النقاط والمكافآت',
  'Community Driven': 'يقودها المجتمع',
  'Join a thriving community of passionate players who love competitive gaming. Make new friends, form lasting connections, and improve your skills together.': 'انضم إلى مجتمع مزدهر من اللاعبين الشغوفين الذين يحبون الألعاب التنافسية. اصنع أصدقاء جدد وشكل اتصالات دائمة وحسّن مهاراتك معاً.',
  'Active Discord community': 'مجتمع Discord نشط',
  'Regular tournaments and events': 'البطولات والأحداث العادية',
  'Friendly and supportive environment': 'بيئة ودية وداعمة',
  'How to Participate': 'كيفية المشاركة',
  'Join Discord': 'انضم إلى Discord',
  'Join our Discord server and verify your account': 'انضم إلى سيرفر Discord الخاص بنا وتحقق من حسابك',
  'Choose Your Tier': 'اختر فئتك',
  'Select Tier 1 or Tier 2 based on your current rank': 'اختر الفئة 1 أو الفئة 2 بناءً على رتبتك الحالية',
  'Open a Ticket': 'افتح تذكرة',
  'Create a ticket for your tier and wait for match confirmation': 'أنشئ تذكرة لفئتك وانتظر تأكيد المباراة',
  'Ticket System': 'نظام التذاكر',
  'Our ticket system is the gateway to participating in InHouse matches. Here\'s what you need to know:': 'نظام التذاكر الخاص بنا هو البوابة للمشاركة في مباريات InHouse. إليك ما تحتاج إلى معرفته:',
  'Tier 1 Tickets': 'تذاكر الفئة 1',
  'For players ranked Diamond IV to Challenger': 'لاعبو Challenger إلى Diamond IV',
  'High-level competitive matches': 'مباريات تنافسية عالية المستوى',
  'Advanced strategies and gameplay': 'استراتيجيات متقدمة واللعب',
  'Exclusive rewards and recognition': 'مكافآت وتقدير حصري',
  'Tier 2 Tickets': 'تذاكر الفئة 2',
  'For players ranked Gold IV to Emerald I': 'للاعبي Gold IV إلى Emerald I',
  'Balanced competitive environment': 'بيئة تنافسية متوازنة',
  'Perfect for skill development': 'مثالي لتطوير المهارات',
  'Path to Tier 1 promotion': 'المسار إلى ترقية الفئة 1',
  'Important Notes': 'ملاحظات مهمة',
  'Tickets are processed on a first-come, first-served basis': 'تتم معالجة التذاكر على أساس من يأتي أولاً يخدم أولاً',
  'Make sure you\'re available for at least 1 hour after opening a ticket': 'تأكد من توفرك لمدة ساعة واحدة على الأقل بعد فتح تذكرة',
  'Your rank will be verified before match assignment': 'سيتم التحقق من رتبتك قبل تعيين المباراة',
  'Be respectful and follow community guidelines at all times': 'كن محترماً واتبع إرشادات المجتمع في جميع الأوقات',
  'Join Discord and Start Playing': 'انضم إلى Discord وابدأ اللعب',

  // LoLPage
  'Competitive 5v5 on Summoner\'s Rift': 'تنافسي 5v5 على Summoner\'s Rift',
  'InHouse System Overview': 'نظرة عامة على نظام InHouse',
  'Our League of Legends InHouse system provides a structured competitive environment where players can test their skills in organized 5v5 matches on Summoner\'s Rift. Every game matters, and every play counts toward your progression.': 'يوفر نظام League of Legends InHouse الخاص بنا بيئة تنافسية منظمة حيث يمكن للاعبين اختبار مهاراتهم في مباريات 5v5 منظمة على Summoner\'s Rift. كل لعبة مهمة وكل لعب يساهم في تقدمك.',
  'Balanced Drafts': 'مسودات متوازنة',
  'Teams are carefully balanced based on player ranks and roles to ensure competitive and fair matches every time.': 'يتم موازنة الفرق بعناية بناءً على رتب اللاعبين والأدوار لضمان مباريات تنافسية وعادلة في كل مرة.',
  'Point System': 'نظام النقاط',
  'Earn points for wins, outstanding performance, and consistent participation. Top performers get special recognition.': 'اكسب النقاط للفوز والأداء المتميز والمشاركة المستمرة. يحصل أفضل المؤديين على اعتراف خاص.',
  'Rank Progression': 'تقدم الرتبة',
  'Climb through tiers by winning games and maintaining high performance. Reach Tier 1 for elite competition.': 'اصعد عبر الفئات بالفوز بالألعاب والحفاظ على الأداء العالي. اصل إلى الفئة 1 للمنافسة النخبة.',
  'How It Works': 'كيف يعمل',
  'Select Your Role': 'اختر دورك',
  'When opening a ticket, specify your primary and secondary roles. We\'ll match you with complementary teammates.': 'عند فتح تذكرة، حدد أدوارك الأساسية والثانوية. سنطابقك مع زملاء فريق متكاملين.',
  'Wait for Match Creation': 'انتظر إنشاء المباراة',
  'Our moderators will form balanced teams based on ranks and roles. You\'ll receive a notification when your match is ready.': 'سيشكل المشرفون لدينا فرق متوازنة بناءً على الرتب والأدوار. ستتلقى إشعاراً عند جاهزية مباراتك.',
  'Join Custom Lobby': 'انضم إلى بهو مخصص',
  'Enter the custom game lobby with your team. Champions are selected through draft pick mode.': 'أدخل بهو اللعبة المخصصة مع فريقك. يتم اختيار الأبطال من خلال وضع draft pick.',
  'Play and Compete': 'العب والتنافس',
  'Give your best effort and play to win. All standard League of Legends rules apply.': 'أعط أفضل ما لديك والعب للفوز. جميع قواعد League of Legends القياسية تنطبق.',
  'Earn Points and Climb': 'اكسب النقاط والارتفاع',
  'Results are recorded and points are awarded. Check the leaderboard to see your ranking.': 'تُسجل النتائج وتُمنح النقاط. تحقق من لوحة المتصدرين لمعرفة ترتيبك.',
  'Tier 1 Requirements': 'متطلبات الفئة 1',
  'Diamond IV to Challenger': 'Diamond IV إلى Challenger',
  'Compete against the best players in the community': 'تنافس ضد أفضل اللاعبين في المجتمع',
  'Higher stakes and more intense matches': 'مراهنات أعلى ومباريات أكثر كثافة',
  'Priority matchmaking during peak hours': 'أولوية المطابقة خلال ساعات الذروة',
  'Tier 2 Requirements': 'متطلبات الفئة 2',
  'Gold IV to Emerald I': 'Gold IV إلى Emerald I',
  'Perfect environment for improving your skills': 'البيئة المثالية لتحسين مهاراتك',
  'Balanced competition with similar-ranked players': 'منافسة متوازنة مع لاعبين برتب مماثلة',
  'Clear path to Tier 1 promotion': 'مسار واضح لترقية الفئة 1',
  'Active community support and coaching': 'دعم المجتمع النشط والتدريب',
  'Point System Breakdown': 'تفصيل نظام النقاط',
  'Action': 'الإجراء',
  'Points Earned': 'النقاط المكتسبة',
  'Match Victory': 'انتصار المباراة',
  '+25 points': '+25 نقطة',
  '+30 points': '+30 نقطة',
  '13-0 Victory (Stomp)': 'انتصار 13-0 (Stomp)',

  // ContactPage
  'Join Our Community': 'انضم إلى مجتمعنا',
  'Ready to start playing? Join our Discord server and connect with us on social media. We\'re here to help you get started.': 'هل أنت مستعد للبدء؟ انضم إلى سيرفر Discord الخاص بنا وتواصل معنا على وسائل التواصل الاجتماعي. نحن هنا لمساعدتك على البدء.',
  'Discord Server': 'سيرفر Discord',
  'Our Discord server is the heart of the community. Join to participate in InHouse matches, connect with other players, and stay updated on events and tournaments.': 'سيرفر Discord الخاص بنا هو قلب المجتمع. انضم للمشاركة في مباريات InHouse والتواصل مع لاعبين آخرين والبقاء على اطلاع بالأحداث والبطولات.',
  'Connect With Us': 'تواصل معنا',
  'Twitter': 'تويتر',
  'Follow us for updates, highlights, and community news': 'اتبعنا للحصول على التحديثات والمحتويات المميزة وأخبار المجتمع',
  'Follow Us': 'اتبعنا',
  'YouTube': 'يوتيوب',
  'Watch match highlights, tutorials, and community content': 'شاهد مقاطع المباريات والبرامج التعليمية والمحتوى المجتمعي',
  'Subscribe': 'اشترك',
  'Twitch': 'تويتش',
  'Watch live InHouse matches and community streams': 'شاهد مباريات InHouse المباشرة وبث المجتمع',
  'Follow Channel': 'اتبع القناة',
  'Important Links': 'روابط مهمة',
  'Registration': 'التسجيل',
  'Sign up to participate in InHouse matches': 'تسجيل للمشاركة في مباريات InHouse',
  'Register Now': 'سجل الآن',
  'Support Center': 'مركز الدعم',
  'Get help with technical issues or questions': 'احصل على مساعدة مع المشاكل التقنية أو الأسئلة',
  'Get Support': 'احصل على الدعم',
  'Community Rules': 'قواعد المجتمع',
  'Read our guidelines and code of conduct': 'اقرأ إرشاداتنا وقواعد السلوك',
  'View Rules': 'عرض القواعد',
  'Report Issues': 'الإبلاغ عن المشاكل',
  'Report bugs, toxicity, or rule violations': 'الإبلاغ عن الأخطاء أو السلوك السيء أو انتهاكات القواعد',
  'Submit Report': 'إرسال البلاغ',
  'Getting Started Guide': 'دليل البدء',
  'Join the Discord Server': 'انضم إلى سيرفر Discord',
  'Click the "Join Discord" button above and accept the server invite.': 'انقر على زر "انضم إلى Discord" أعلاه واقبل دعوة السيرفر.',
  'Complete Verification': 'إكمال التحقق',
  'Follow the verification process to access all channels and features.': 'اتبع عملية التحقق للوصول إلى جميع القنوات والميزات.',
  'Register Your Rank': 'سجل رتبتك',
  'Submit your in-game rank to be assigned to the appropriate tier.': 'قدم رتبتك داخل اللعبة ليتم تعيينك إلى الفئة المناسبة.',
};

function applyTranslation(enable: boolean) {
  try {
    if (enable) {
      // set direction to RTL for Arabic
      document.documentElement.dir = 'rtl';

      // Store original text in a data attribute and apply translations to each text node
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      let currentNode: Text | null;
      while ((currentNode = walker.nextNode() as Text | null)) {
        const parent = currentNode.parentElement;
        if (parent && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
          const text = currentNode.textContent || '';
          const trimmed = text.trim();
          if (trimmed && translations[trimmed]) {
            // Store original only once
            if (!parent.hasAttribute('data-orig-text-stored')) {
              parent.setAttribute('data-orig-text', text);
              parent.setAttribute('data-orig-text-stored', 'true');
            }
            // Apply translation
            const leading = text.match(/^\s*/)?.[0] || '';
            const trailing = text.match(/\s*$/)?.[0] || '';
            currentNode.textContent = leading + translations[trimmed] + trailing;
          }
        }
      }
    } else {
      // revert direction and restore original text
      document.documentElement.dir = 'ltr';

      document.querySelectorAll('[data-orig-text-stored="true"]').forEach((el) => {
        const orig = el.getAttribute('data-orig-text');
        if (orig && el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
          el.childNodes[0].textContent = orig;
        }
        el.removeAttribute('data-orig-text');
        el.removeAttribute('data-orig-text-stored');
      });
    }
  } catch (e) {
    // fail silently — translation is progressive enhancement
    // eslint-disable-next-line no-console
    console.error('Translation error', e);
  }
}

const TranslateButton: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // Clear any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Apply translation based on enabled state
    applyTranslation(enabled);

    // Only set up observer if translation is enabled
    if (enabled) {
      const observer = new MutationObserver(() => {
        // Re-apply translation to any newly added DOM nodes
        applyTranslation(true);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [enabled]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={enabled}
      title={enabled ? 'Click to revert Arabic translation' : 'Click to translate to Arabic'}
      onClick={() => setEnabled((s) => !s)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setEnabled((s) => !s);
        }
      }}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 ${enabled ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer transform transition-all hover:scale-105`}
      style={{ fontSize: '1.1rem' }}
    >
      <span style={{ lineHeight: 0 }} aria-hidden>
        ع
      </span>
      <span className="sr-only">{enabled ? 'Arabic translation enabled' : 'Click to enable Arabic translation'}</span>
    </div>
  );
};

export default TranslateButton;
