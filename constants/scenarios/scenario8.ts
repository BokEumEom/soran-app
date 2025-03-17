import { Scenario } from '@/types/scenario';

export const scenario8: Scenario = {
  id: 8,
  title: '중요한 사람과의 관계에서 신뢰가 깨졌을 때',
  description: '친구나 연인의 배신으로 인해 신뢰가 무너진 상황이에요. 이제 어떻게 대처할지 한 번 고민해볼까요?',
  chapters: [
    {
      id: 1,
      text: '중요한 사람과의 관계에서 신뢰가 깨졌어요. 상대방이 당신을 배신한 것 같아요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '상대방과 솔직하게 대화하며 문제를 해결한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 5, anxiety: -5 },
          message: '상대방과 솔직하게 대화를 나누며 서로의 오해를 풀었어요. 앞으로도 꾸준한 소통이 신뢰를 회복하는 데 큰 도움이 될 거예요.',
        },
        {
          id: 2,
          text: '상대방과 거리를 두고 시간을 가지며 감정을 정리한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 0, anxiety: -5 },
          message: '잠시 거리를 두며 감정을 정리하니 마음의 평화를 찾을 수 있었어요. 때로는 시간도 치유의 한 방법이랍니다.',
        },
        {
          id: 3,
          text: '즉시 관계를 끊고 더 이상 교류하지 않는다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 10, confidence: -5, happiness: -10, anxiety: 10 },
          message: '관계를 단절하며 상실감을 느꼈지만, 새로운 시작을 다짐하게 되었어요. 이 경험을 통해 앞으로 더 신중해질 수 있을 거예요.',
        },
      ],
    },
    {
      id: 2,
      text: '상대방과 솔직하게 대화를 나눈 후 관계가 조금 회복되었어요. 다음에는 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '관계를 더 깊게 발전시키고 신뢰를 쌓는다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 15, anxiety: -5 },
          message: '서로의 마음을 열고 진솔하게 대화하며 관계를 깊게 만들었어요. 앞으로도 서로에 대한 이해와 배려를 이어가세요.',
        },
        {
          id: 2,
          text: '상대방과의 관계를 서서히 유지하며 거리를 둔다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 0, confidence: 5, happiness: 5, anxiety: 0 },
          message: '관계를 서서히 유지하며 신중하게 접근하고 있어요. 천천히 신뢰를 회복해 나가는 것도 좋은 방법이에요.',
        },
      ],
    },
    {
      id: 3,
      text: '거리를 두고 시간을 가진 후, 다시 상대방과 대화할 기회를 가졌어요.',
      choices: [
        {
          id: 1,
          text: '상대방과 다시 만나 신뢰를 회복하려 노력한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 10, anxiety: -5 },
          message: '다시 만나 솔직한 대화를 나누면서 신뢰를 조금씩 회복했어요. 서로에게 조금 더 다가가보세요.',
        },
        {
          id: 2,
          text: '관계를 끊기로 결정하고 새로운 사람을 찾는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 10, confidence: -5, happiness: -10, anxiety: 10 },
          message: '관계를 완전히 정리하고 새로운 시작을 모색했어요. 아쉽지만 때로는 새로운 인연이 필요할 때도 있답니다.',
        },
      ],
    },
    {
      id: 4,
      text: '관계를 끊은 후 상실감이 커져 혼자 남은 기분이 들어요.',
      choices: [
        {
          id: 1,
          text: '시간을 가지며 혼자서 감정을 정리한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 5, happiness: 0, anxiety: -5 },
          message: '혼자만의 시간을 가지며 상실감을 천천히 극복했어요. 자기 자신을 돌보는 시간도 매우 소중하답니다.',
        },
        {
          id: 2,
          text: '친구나 가족과 시간을 보내며 위로를 받는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 5, anxiety: -5 },
          message: '친구나 가족과 함께하며 따뜻한 위로를 받았어요. 사랑하는 사람들과의 시간은 큰 힘이 됩니다.',
        },
      ],
    },
    {
      id: 5,
      text: '당신은 관계에서 신뢰를 회복하고, 서로의 이해와 배려를 통해 관계가 더욱 깊어졌어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '관계를 정리하고 새로운 시작을 준비 중이에요. 아직 상실감이 남아있지만, 앞으로 밝은 미래를 기대해봐요.',
      isEnding: true,
      choices: [],
    },
  ],
};
