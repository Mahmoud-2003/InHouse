'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const translations: Record<string, string> = {
  // Nav / shared chrome
  'Home': 'الرئيسية',
  'InHouse': 'إنهاوس',
  'League & Valorant': 'ليج و فالورانت',
  'Queue': 'الطابور',
  'Partners': 'الشركاء',
  'Join Us': 'انضم إلينا',
  'Discord': 'ديسكورد',
  'Facebook': 'فيسبوك',
  'Join Discord': 'انضم إلى Discord',

  // Footer
  'InHouse League & Valorant': 'إنهاوس ليج و فالورانت',
  'A competitive gaming community for League of Legends and Valorant players. Join us for organized InHouse matches and climb the leaderboard.':
    'مجتمع ألعاب تنافسي للاعبي League of Legends و Valorant. انضم إلينا لمباريات إنهاوس المنظمة وتسلق لوحة الصدارة.',
  'Quick Links': 'روابط سريعة',
  'Status': 'الحالة',
  'MATCH SYSTEM': 'نظام المباريات',
  'ONLINE': 'متصل',
  'TICKETS': 'التذاكر',
  'OPEN': 'مفتوح',
  '© 2025 InHouse League & Valorant — Not affiliated with Riot Games': '© 2025 إنهاوس ليج و فالورانت — غير تابع لشركة Riot Games',

  // HomePage
  'Loading Feed': 'جارٍ تحميل البيانات',
  'Season Live // Ranked Ladder Open': 'الموسم مباشر // سلم الترتيب مفتوح',
  '"Proven mechanical skill meets organized strategy"': '"مهارة ميكانيكية مثبتة تلتقي باستراتيجية منظمة"',
  'Join Discord Server': 'انضم إلى سيرفر ديسكورد',
  'Learn More': 'اعرف المزيد',
  'Scroll': 'مرر للأسفل',
  'Season Rankings': 'ترتيب الموسم',
  'Top 10 Leaderboard': 'أفضل 10 في لوحة الصدارة',
  'The highest-ranked InHouse competitors, ranked by points earned across every match.':
    'أعلى المتنافسين ترتيباً في إنهاوس، مرتبين حسب النقاط المكتسبة عبر كل مباراة.',
  'TBD': 'غير محدد',
  '— pts': '— نقطة',
  'Rankings update automatically once matches are reported': 'يتم تحديث الترتيب تلقائياً بمجرد الإبلاغ عن نتائج المباريات',
  'Pick Your Battlefield': 'اختر ساحة معركتك',
  'Choose Your Game': 'اختر لعبتك',
  "5v5 // Summoner's Rift": '5 ضد 5 // ساحة المستدعين',
  'League of Legends': 'ليج أوف ليجيندز',
  '5v5 // Tactical Shooter': '5 ضد 5 // تصويب تكتيكي',
  'Valorant': 'فالورانت',
  'Powered by InHouse Management System': 'بدعم من نظام إدارة إنهاوس',

  // InHousePage
  'System Overview': 'نظرة عامة على النظام',
  'What is InHouse?': 'ما هو إنهاوس؟',
  'InHouse is a competitive gaming system where players participate in organized 5v5 matches within our community. Experience fair, balanced games with players of similar skill levels.':
    'InHouse هو نظام ألعاب تنافسي حيث يشارك اللاعبون في مباريات 5v5 منظمة داخل مجتمعنا. جربة ألعاب عادلة ومتوازنة مع لاعبين بمستويات مهارة مماثلة.',
  'Competitive Environment': 'بيئة تنافسية',
  'All matches are played with serious intent to win. Our system ensures balanced teams based on player skill and rank, creating competitive and exciting games every time.':
    'يتم لعب جميع المباريات برغبة جادة في الفوز. يضمن نظامنا فرق متوازنة بناءً على مهارة اللاعب والرتبة، مما ينشئ ألعاب تنافسية ومثيرة في كل مرة.',
  'Balanced team composition': 'تكوين فريق متوازن',
  'Ranked-based matchmaking': 'المطابقة بناءً على الرتبة',
  'Points and rewards system': 'نظام النقاط والمكافآت',
  'Community Driven': 'يقودها المجتمع',
  'Join a thriving community of passionate players who love competitive gaming. Make new friends, form lasting connections, and improve your skills together.':
    'انضم إلى مجتمع مزدهر من اللاعبين الشغوفين الذين يحبون الألعاب التنافسية. اصنع أصدقاء جدد وشكل اتصالات دائمة وحسّن مهاراتك معاً.',
  'Active Discord community': 'مجتمع Discord نشط',
  'Regular tournaments and events': 'البطولات والأحداث العادية',
  'Friendly and supportive environment': 'بيئة ودية وداعمة',
  'Onboarding Sequence': 'تسلسل الانضمام',
  'How to Participate': 'كيفية المشاركة',
  'Join our Discord server and verify your account': 'انضم إلى سيرفر Discord الخاص بنا وتحقق من حسابك',
  'Join the Queue': 'انضم إلى الطابور',
  'Head to the queue channel and click Join Queue to get matched into a game':
    'توجه إلى قناة الطابور واضغط Join Queue لتحصل على مباراة',
  'Climb the Ranking': 'تسلق الترتيب',
  'Win your matches to earn points, climb the leaderboard, and get recognized as a top performer':
    'اربح مبارياتك لتكسب النقاط وتتسلق لوحة المتصدرين وتحصل على تقدير كأفضل لاعب',
  'Ticket System': 'نظام التذاكر',
  'Need help, have a question, or found a bug? Open a ticket and pick the category that fits — our team picks it up from there.':
    'تحتاج مساعدة أو لديك سؤال أو وجدت خطأ؟ افتح تذكرة واختر الفئة المناسبة — سيتابع فريقنا الأمر من هناك.',
  'Contact Admin': 'التواصل مع الإدارة',
  'Reach a server admin directly for account, access, or moderation issues.':
    'تواصل مباشرة مع أحد مشرفي السيرفر لمشاكل الحساب أو الوصول أو الإشراف.',
  'About InHouse LoL': 'عن إنهاوس ليج أوف ليجيندز',
  'Questions about League of Legends InHouse matches, roles, or the queue.':
    'أسئلة حول مباريات إنهاوس لليج أوف ليجيندز أو الأدوار أو الطابور.',
  'For Problem': 'للإبلاغ عن مشكلة',
  'Report a bug, a rule violation, or anything that went wrong.':
    'أبلغ عن خطأ برمجي أو مخالفة قواعد أو أي شيء لم يسر كما يجب.',
  'About InHouse Valorant': 'عن إنهاوس فالورانت',
  'Questions about Valorant InHouse matches, agents, or the queue.':
    'أسئلة حول مباريات إنهاوس لفالورانت أو العملاء أو الطابور.',
  'Important Notes': 'ملاحظات مهمة',
  '• Pick the category that best matches your issue so it reaches the right team faster':
    '• اختر الفئة الأنسب لمشكلتك لتصل بشكل أسرع للفريق المناسب',
  "• Tickets are handled in the order they're received": '• تُعالج التذاكر حسب ترتيب وصولها',
  '• Include as much detail as you can — screenshots help': '• أضف أكبر قدر ممكن من التفاصيل — الصور تساعد كثيراً',
  '• Be respectful and follow community guidelines at all times': '• كن محترماً واتبع إرشادات المجتمع في جميع الأوقات',
  'Join Discord and Start Playing': 'انضم إلى Discord وابدأ اللعب',

  // LoLPage
  "Summoner's Rift": 'ساحة المستدعين',
  "Competitive 5v5 on Summoner's Rift": "تنافسي 5v5 على Summoner's Rift",
  'InHouse System Overview': 'نظرة عامة على نظام InHouse',
  "Our League of Legends InHouse system provides a structured competitive environment where players can test their skills in organized 5v5 matches on Summoner's Rift. Every game matters, and every play counts toward your progression.":
    "يوفر نظام League of Legends InHouse الخاص بنا بيئة تنافسية منظمة حيث يمكن للاعبين اختبار مهاراتهم في مباريات 5v5 منظمة على Summoner's Rift. كل لعبة مهمة وكل لعب يساهم في تقدمك.",
  'Balanced Drafts': 'مسودات متوازنة',
  'Teams are carefully balanced based on player ranks and roles to ensure competitive and fair matches every time.':
    'يتم موازنة الفرق بعناية بناءً على رتب اللاعبين والأدوار لضمان مباريات تنافسية وعادلة في كل مرة.',
  'Point System': 'نظام النقاط',
  'Earn points for wins, outstanding performance, and consistent participation. Top performers get special recognition.':
    'اكسب النقاط للفوز والأداء المتميز والمشاركة المستمرة. يحصل أفضل المؤديين على اعتراف خاص.',
  'Rank Progression': 'تقدم الرتبة',
  'Climb through tiers by winning games and maintaining high performance. Reach Tier 1 for elite competition.':
    'اصعد عبر الفئات بالفوز بالألعاب والحفاظ على الأداء العالي. اصل إلى الفئة 1 للمنافسة النخبة.',
  'Match Pipeline': 'مسار المباراة',
  'How It Works': 'كيف يعمل',
  'Select Your Role': 'اختر دورك',
  "When joining the queue, specify your primary and secondary roles. We'll match you with complementary teammates.":
    'عند الانضمام إلى الطابور، حدد أدوارك الأساسية والثانوية. سنطابقك مع زملاء فريق متكاملين.',
  'Wait for Match Creation': 'انتظر إنشاء المباراة',
  "Our moderators will form balanced teams based on ranks and roles. You'll receive a notification when your match is ready.":
    'سيشكل المشرفون لدينا فرق متوازنة بناءً على الرتب والأدوار. ستتلقى إشعاراً عند جاهزية مباراتك.',
  'Join Custom Lobby': 'انضم إلى بهو مخصص',
  'Enter the custom game lobby with your team. Champions are selected through draft pick mode.':
    'أدخل بهو اللعبة المخصصة مع فريقك. يتم اختيار الأبطال من خلال وضع draft pick.',
  'Play and Compete': 'العب والتنافس',
  'Give your best effort and play to win. All standard League of Legends rules apply.':
    'أعط أفضل ما لديك والعب للفوز. جميع قواعد League of Legends القياسية تنطبق.',
  'Earn Points and Climb': 'اكسب النقاط والارتفاع',
  'Results are recorded and points are awarded. Check the leaderboard to see your ranking.':
    'تُسجل النتائج وتُمنح النقاط. تحقق من لوحة المتصدرين لمعرفة ترتيبك.',
  'Join Discord and Enter the Queue': 'انضم إلى Discord وادخل الطابور',

  // ValorantPage
  'Tactical Ops': 'عمليات تكتيكية',
  'Tactical 5v5 Character-Based Shooter': 'لعبة تصويب تكتيكية 5 ضد 5 مبنية على الشخصيات',
  'Experience competitive Valorant matches in our organized InHouse system. Test your tactical skills, agent mastery, and teamwork in balanced 5v5 matches against players of similar skill levels.':
    'جرب مباريات Valorant التنافسية في نظام إنهاوس المنظم لدينا. اختبر مهاراتك التكتيكية وإتقانك للعملاء والعمل الجماعي في مباريات 5 ضد 5 متوازنة ضد لاعبين بمستوى مهارة مماثل.',
  'Competitive Gameplay': 'أسلوب لعب تنافسي',
  'Play on competitive map pool with tournament-standard rules. Every round matters in your journey to the top.':
    'العب على مجموعة الخرائط التنافسية بقواعد بمستوى البطولات. كل جولة مهمة في رحلتك نحو القمة.',
  'Rank-Based Matching': 'مطابقة بناءً على الرتبة',
  'Teams are balanced based on your competitive rank ensuring fair and exciting matches every time.':
    'يتم موازنة الفرق بناءً على رتبتك التنافسية لضمان مباريات عادلة ومثيرة في كل مرة.',
  'Agent Diversity': 'تنوع العملاء',
  'Showcase your agent pool and adapt your strategies. Team composition and synergy are key to victory.':
    'أظهر مجموعة عملائك وكيّف استراتيجياتك. تشكيلة الفريق والتناغم هما مفتاح النصر.',
  'Match Format': 'تنسيق المباراة',
  'Head to the queue channel and click Join Queue with your current Valorant rank. Be ready to verify your rank if needed.':
    'توجه إلى قناة الطابور واضغط Join Queue برتبتك الحالية في Valorant. كن مستعداً للتحقق من رتبتك إذا لزم الأمر.',
  'Team Formation': 'تشكيل الفريق',
  'Teams are formed with balanced ranks and roles. Each team will have a mix of duelists, controllers, initiators, and sentinels.':
    'تُشكَّل الفرق برتب وأدوار متوازنة. سيضم كل فريق مزيجاً من الـ Duelists والـ Controllers والـ Initiators والـ Sentinels.',
  'Map Selection': 'اختيار الخريطة',
  'Maps are selected from the competitive pool. Both teams can ban one map each, then the match map is randomly selected.':
    'تُختار الخرائط من المجموعة التنافسية. يمكن لكل فريق حظر خريطة واحدة، ثم تُختار خريطة المباراة عشوائياً.',
  'Play to Win': 'العب للفوز',
  'Standard competitive rules apply. First team to win 13 rounds takes the match. Communication and strategy are essential.':
    'تُطبَّق القواعد التنافسية القياسية. الفريق الأول الذي يفوز بـ 13 جولة يحسم المباراة. التواصل والاستراتيجية أساسيان.',
  'Post-Match Review': 'مراجعة ما بعد المباراة',
  'Results are recorded and stats are tracked. Review your performance and climb the leaderboard.':
    'تُسجَّل النتائج وتُتابع الإحصائيات. راجع أداءك وتسلق لوحة المتصدرين.',
  'Ranking System': 'نظام الترتيب',
  'Your performance in InHouse matches affects your community ranking. Consistent wins and strong individual performance will elevate your standing.':
    'أداؤك في مباريات إنهاوس يؤثر على ترتيبك في المجتمع. الانتصارات المستمرة والأداء الفردي القوي يرفعان مكانتك.',
  'Win Impact': 'تأثير الفوز',
  'Match Victory': 'انتصار المباراة',
  '+30 points': '+30 نقطة',
  '13-0 Victory (Stomp)': 'انتصار 13-0 (Stomp)',
  '+10 bonus': '+10 مكافأة',
  'Match Loss': 'خسارة المباراة',
  '+5 points': '+5 نقطة',
  'Performance Bonuses': 'مكافآت الأداء',
  'Match MVP': 'أفضل لاعب في المباراة',
  '+15 bonus': '+15 مكافأة',
  'Team MVP': 'أفضل لاعب في الفريق',
  '+8 bonus': '+8 مكافأة',
  'Ace Round': 'جولة Ace',
  '+5 bonus': '+5 مكافأة',
  'Important Rules': 'قواعد مهمة',
  'No smurfing or account sharing - your rank must be verified': 'ممنوع استخدام حسابات وهمية أو مشاركة الحساب - يجب التحقق من رتبتك',
  'Respectful communication only - toxicity results in immediate suspension': 'التواصل المحترم فقط - السلوك السام يؤدي إلى إيقاف فوري',
  'No cheating, exploits, or unauthorized software': 'ممنوع الغش أو استغلال الثغرات أو استخدام برامج غير مصرح بها',
  'Must be available for the full match duration (30-60 minutes)': 'يجب التواجد طوال مدة المباراة (30-60 دقيقة)',
  'Follow all Discord server rules and community guidelines': 'اتبع جميع قواعد سيرفر ديسكورد وإرشادات المجتمع',

  // QueuePage
  'Matchmaking': 'المطابقة',
  'Queue System': 'نظام الطابور',
  "Join the queue, get matched, and drop straight into your team's private channel — no tickets, no waiting on staff.":
    'انضم إلى الطابور، احصل على مباراة، وانتقل مباشرة إلى قناة فريقك الخاصة — بدون تذاكر وبدون انتظار الإدارة.',
  'From Queue to Match': 'من الطابور إلى المباراة',
  'Head to the queue channel and click Join Queue to claim a slot. Leave anytime before the match locks in.':
    'توجه إلى قناة الطابور واضغط Join Queue لحجز مكانك. يمكنك المغادرة في أي وقت قبل قفل المباراة.',
  'Teams Fill Up': 'اكتمال الفرق',
  'Once both Slot 1 and Slot 2 are full, the queue locks and the system starts forming your match.':
    'بمجرد اكتمال الفتحة 1 والفتحة 2، يُقفل الطابور ويبدأ النظام بتشكيل مباراتك.',
  'Private Team Channels': 'قنوات خاصة للفريقين',
  'Two private channels are created automatically — Team Red and Team Blue — and every player is moved into the channel for their assigned team.':
    'يتم إنشاء قناتين خاصتين تلقائياً — الفريق الأحمر والفريق الأزرق — ويُنقل كل لاعب إلى قناة فريقه المخصص.',
  'Team Red': 'الفريق الأحمر',
  'Private channel created': 'تم إنشاء قناة خاصة',
  'Team Blue': 'الفريق الأزرق',
  'Live In Discord': 'مباشر على Discord',
  'The Queue Panel': 'لوحة الطابور',
  'Every queue posts a live panel right in Discord. Players see the game, region, and whether Dynamic MMR or Captain Mode is active, then join Slot 1 or Slot 2 with a single click. When a slot fills up, the panel updates instantly for everyone watching.':
    'كل طابور ينشر لوحة مباشرة في Discord. يرى اللاعبون اللعبة والمنطقة وما إذا كان Dynamic MMR أو Captain Mode مفعّلاً، ثم ينضمون إلى الفتحة 1 أو الفتحة 2 بضغطة واحدة. عند اكتمال فتحة، تتحدث اللوحة فوراً لكل من يشاهدها.',
  'Join or leave the queue with one click, no commands to remember': 'انضم أو غادر الطابور بضغطة واحدة، بدون أوامر تحتاج لتذكرها',
  'Slot status updates live so you always know how close the match is': 'تتحدث حالة الفتحات مباشرة لتعرف دائماً مدى قرب المباراة',
  'Manage Queue controls let moderators adjust or reset a stuck lobby': 'أدوات Manage Queue تتيح للمشرفين تعديل أو إعادة ضبط أي غرفة عالقة',
  'Dynamic MMR': 'Dynamic MMR',
  'Team balance recalculates in real time as players join, keeping every match fair.':
    'يُعاد حساب توازن الفريق فورياً مع انضمام اللاعبين، مما يحافظ على عدالة كل مباراة.',
  'Captain Mode': 'Captain Mode',
  'Optional captain-pick drafting for queues that want more control over team composition.':
    'اختيار اختياري بنظام الكابتن للطوابير التي تريد تحكماً أكبر في تشكيل الفريق.',
  'Unique Leaderboard': 'لوحة صدارة فريدة',
  'Every queued match feeds the community leaderboard automatically — no manual reporting.':
    'كل مباراة عبر الطابور تُغذي لوحة صدارة المجتمع تلقائياً — بدون إبلاغ يدوي.',

  // ContactPage
  'Recruitment Open': 'التوظيف مفتوح',
  'Join Our Community': 'انضم إلى مجتمعنا',
  "Ready to start playing? Join our Discord server and connect with us on social media. We're here to help you get started.":
    'هل أنت مستعد للبدء؟ انضم إلى سيرفر Discord الخاص بنا وتواصل معنا على وسائل التواصل الاجتماعي. نحن هنا لمساعدتك على البدء.',
  'Discord Server': 'سيرفر Discord',
  'Our Discord server is the heart of the community. Join to participate in InHouse matches, connect with other players, and stay updated on events and tournaments.':
    'سيرفر Discord الخاص بنا هو قلب المجتمع. انضم للمشاركة في مباريات InHouse والتواصل مع لاعبين آخرين والبقاء على اطلاع بالأحداث والبطولات.',
  'Getting Started Guide': 'دليل البدء',
  'Join the Discord Server': 'انضم إلى سيرفر Discord',
  'Click the "Join Discord" button above and accept the server invite.': 'انقر على زر "انضم إلى Discord" أعلاه واقبل دعوة السيرفر.',
  'Complete Verification': 'إكمال التحقق',
  'Follow the verification process to access all channels and features.': 'اتبع عملية التحقق للوصول إلى جميع القنوات والميزات.',
  'Register Your Rank': 'سجل رتبتك',
  'Submit your in-game rank so the queue can build fair, balanced matches.': 'قدم رتبتك داخل اللعبة ليتمكن الطابور من بناء مباريات عادلة ومتوازنة.',
  'Join Your First Queue': 'انضم إلى أول طابور لك',
  'Head to the queue channel and click Join Queue to enter your first match.': 'توجه إلى قناة الطابور واضغط Join Queue للدخول في مباراتك الأولى.',
  'Play and Have Fun': 'العب واستمتع',
  'Wait for your match assignment, join the lobby, and compete!': 'انتظر تعيين مباراتك، وانضم إلى الغرفة، وتنافس!',
  'Have questions? Need help? Our community moderators are always ready to assist you.':
    'لديك أسئلة؟ تحتاج مساعدة؟ مشرفو مجتمعنا مستعدون دائماً لمساعدتك.',
  'Join Discord Now': 'انضم إلى Discord الآن',

  // TournamentSection (static labels; the content itself is admin-managed)
  'Tournament Announcement': 'إعلان البطولة',
  'Tournament Format': 'نظام البطولة',
  'Rules & Requirements': 'القواعد والمتطلبات',
  'Prizes': 'الجوائز',
  'Register on Battlefy': 'التسجيل عبر Battlefy',
  'View on Battlefy': 'عرض على Battlefy',
  'Registration Closed': 'التسجيل مغلق',

  // PartnersPage
  'Verified Partners': 'شركاء موثقون',
  'Server Partners': 'شركاء السيرفر',
  'Communities we work with to grow competitive League of Legends and Valorant across regions.':
    'مجتمعات نتعاون معها لتنمية المنافسة في League of Legends و Valorant عبر مختلف المناطق.',
  'Featured Partner': 'شريك مميز',
  'Poropark': 'بوروبارك',
  'Swedish League of Legends Community': 'مجتمع سويدي لِـ League of Legends',
  "Poropark builds the infrastructure for Sweden's next generation of competitive League of Legends — running tournaments, leagues, and team management with less administrative friction than the pro circuit.":
    'بوروبارك يبني البنية التحتية للجيل القادم من المنافسة في League of Legends بالسويد — عبر تنظيم البطولات والدوريات وإدارة الفرق بأقل قدر من التعقيد الإداري مقارنة بالدوريات الاحترافية.',
  'What They Offer': 'ما الذي يقدمونه',
  'Tournaments & Leagues': 'البطولات والدوريات',
  'Team & Roster Management': 'إدارة الفرق والتشكيلات',
  'Player Rankings & Hall of Fame': 'تصنيف اللاعبين وقاعة المشاهير',
  'Looking-for-Group (LFG) Matching': 'مطابقة البحث عن فريق (LFG)',
  '5 Verified Organizations': '5 منظمات موثقة',
  '18 Teams': '18 فريقاً',
  'Visit Poropark': 'زيارة بوروبارك',
  'Join Poropark Discord': 'انضم إلى ديسكورد بوروبارك',
};

const IGNORED_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME']);

// Maps every text node we've translated back to its original content, so we
// can revert precisely without assuming anything about sibling nodes.
const originalByNode = new Map<Text, string>();

function translateTextNode(node: Text, dict: Record<string, string>) {
  const text = node.textContent || '';
  const trimmed = text.trim();
  if (!trimmed || !dict[trimmed] || originalByNode.has(node)) return;

  originalByNode.set(node, text);
  const leading = text.match(/^\s*/)?.[0] || '';
  const trailing = text.match(/\s*$/)?.[0] || '';
  node.textContent = leading + dict[trimmed] + trailing;
}

function walkAndTranslate(root: Node, dict: Record<string, string>) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    const parent = node.parentElement;
    if (parent && !IGNORED_TAGS.has(parent.tagName)) {
      translateTextNode(node, dict);
    }
  }
}

function revertAll() {
  originalByNode.forEach((original, node) => {
    node.textContent = original;
  });
  originalByNode.clear();
}

function applyTranslation(enable: boolean, dict: Record<string, string>) {
  try {
    if (enable) {
      document.documentElement.dir = 'rtl';
      walkAndTranslate(document.body, dict);
    } else {
      document.documentElement.dir = 'ltr';
      revertAll();
    }
  } catch (e) {
    console.error('Translation error', e);
  }
}

interface TranslateButtonProps {
  /** Admin-managed English->Arabic pairs merged over the static dictionary. */
  extra?: Record<string, string>;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ extra }) => {
  const [enabled, setEnabled] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);
  const dict = useMemo(() => ({ ...translations, ...(extra ?? {}) }), [extra]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    applyTranslation(enabled, dict);

    if (enabled) {
      const observer = new MutationObserver(() => {
        // Re-apply translation to any newly added DOM nodes (e.g. page navigation)
        walkAndTranslate(document.body, dict);
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
  }, [enabled, dict]);

  return (
    <motion.div
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
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 clip-btn border ${enabled ? 'bg-volt border-volt text-void' : 'bg-panel border-line text-ink hover:border-volt/60'} shadow-xl flex items-center justify-center cursor-pointer font-display`}
      style={{ fontSize: '1.1rem' }}
    >
      <span style={{ lineHeight: 0 }} aria-hidden>
        ع
      </span>
      <span className="sr-only">{enabled ? 'Arabic translation enabled' : 'Click to enable Arabic translation'}</span>
    </motion.div>
  );
};

export default TranslateButton;
