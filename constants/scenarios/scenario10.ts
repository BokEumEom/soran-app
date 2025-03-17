import { Scenario } from '@/types/scenario';

export const scenario10: Scenario = {
  id: 10,
  title: '이별 후 마음의 치유',
  description: '갑작스러운 이별로 슬픔과 배신감을 느끼는 상황이에요. 이제 감정을 어떻게 정리할지 함께 고민해봐요.',
  chapters: [
    {
      id: 1,
      text: '연인과의 갑작스러운 이별로 슬픔과 배신감을 느끼고 있어요. 어떻게 대처할까요?',
      choices: [
        {
          id: 1,
          text: '혼자만의 시간을 가지며 감정을 정리한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 10, anxiety: -5 },
          message: '혼자만의 시간을 가지며 스스로를 돌봤어요. 차분하게 감정을 정리하는 동안 자기 자신을 사랑하는 법도 배울 수 있었답니다.',
        },
        {
          id: 2,
          text: '친구들과 시간을 보내며 위로를 받는다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -15, confidence: 10, happiness: 15, anxiety: -10 },
          message: '친구들과 따뜻한 시간을 보내며 위로를 받았어요. 함께 있으면 고통이 덜하고, 새로운 힘을 얻을 수 있답니다.',
        },
        {
          id: 3,
          text: '연인에게 다시 연락해 재회를 요청한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 20, confidence: -10, happiness: -20, anxiety: 20 },
          message: '연인에게 다시 연락했지만, 기대에 미치지 못해 상처만 더 깊어졌어요. 때로는 과거를 보내는 것도 치유의 한 방법이에요.',
        },
      ],
    },
    {
      id: 2,
      text: '혼자서 감정을 정리하며 자신을 돌보고 있어요.',
      choices: [
        {
          id: 1,
          text: '새로운 취미를 시작해 나에게 집중한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 20, anxiety: -5 },
          message: '새로운 취미 활동을 시작하며 자신에게 더 많은 시간을 쏟았어요. 즐거움과 활력을 찾으며 점차 치유되고 있습니다.',
        },
        {
          id: 2,
          text: '자기 계발에 집중해 자신감을 회복한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, confidence: 20, happiness: 15, anxiety: -10 },
          message: '자기 계발에 힘쓰며 새로운 목표를 세워 자신감을 되찾았어요. 스스로 성장하는 경험이 큰 위로가 되었답니다.',
        },
      ],
    },
    {
      id: 3,
      text: '친구들과 함께하는 시간을 통해 감정적으로 위로받고 안정감을 느끼고 있어요.',
      choices: [
        {
          id: 1,
          text: '다시 사회 활동을 시작하며 새로운 만남을 추구한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 20, anxiety: -5 },
          message: '새로운 사람들과의 만남을 통해 점차 치유되고 있어요. 사회적 관계가 다시 활기를 불어넣어 준답니다.',
        },
        {
          id: 2,
          text: '여행을 떠나 혼자만의 시간을 가지며 자신을 되돌아본다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -15, confidence: 15, happiness: 15, anxiety: -10 },
          message: '혼자 여행을 다녀오며 스스로를 되돌아보고 치유의 시간을 가졌어요. 새로운 환경이 마음의 안정을 가져다줍니다.',
        },
      ],
    },
    {
      id: 4,
      text: '재회를 시도했지만, 오히려 상처가 깊어졌어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '시간을 두고 감정을 천천히 정리한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 5, anxiety: -10 },
          message: '시간을 두고 차분히 감정을 정리하며 스스로를 치유하기 시작했어요. 때로는 서두르지 않고 천천히 나아가는 것도 현명한 선택이랍니다.',
        },
        {
          id: 2,
          text: '모든 것을 포기하고 무기력하게 지낸다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 20, confidence: -20, happiness: -20, anxiety: 20 },
          message: '감정을 정리하지 못한 채 무기력하게 지내며 고통이 더 커졌어요. 이런 상황에서는 조금씩이라도 스스로 회복하려는 노력이 필요해요.',
        },
      ],
    },
    {
      id: 5,
      text: '감정적으로 치유가 이루어졌고, 앞으로 나아갈 준비가 되었어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '감정을 제대로 정리하지 못해 무기력함 속에 빠져 있어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
