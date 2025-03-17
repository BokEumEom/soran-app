import { Scenario } from '@/types/scenario';

export const scenario2: Scenario = {
  id: 2,
  title: '업무 중 윤리적 딜레마',
  description: '동료가 회사 기밀 정보를 외부로 유출하는 걸 봤어요. 어떻게 할까요?',
  chapters: [
    {
      id: 1,
      text: '동료가 회사 기밀 정보를 외부로 유출하는 걸 봤어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '바로 상사에게 알려본다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 0, confidence: 10, anxiety: -5 },
          message: '상사에게 바로 보고해 조사가 시작되었어요. 앞으로 이런 상황에서는 사건의 세부 사항을 꼼꼼히 기록하며 신속히 대응하는 습관을 기르면 더 좋을 거예요.',
        },
        {
          id: 2,
          text: '동료에게 직접 왜 그런지 물어본다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 5, anxiety: -3 },
          message: '동료에게 직접 이유를 물어봤어요. 이렇게 솔직하게 접근하는 것도 좋지만, 상대방의 입장을 함께 고려한 질문을 덧붙이면 더 효과적일 수 있어요.',
        },
        {
          id: 3,
          text: '아무런 행동도 하지 않고 상황을 지켜본다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 10, happiness: -5, confidence: -5, anxiety: 10 },
          message: '아무런 조치를 취하지 않자 상황이 점점 심각해졌어요. 다음번에는 초기부터 적극적으로 대응해 상황을 바로잡아 보세요.',
        },
      ],
    },
    {
      id: 2,
      text: '상사가 조사를 시작했어요. 그럼 다음엔 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '조사에 적극적으로 협조한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 5, anxiety: -3 },
          message: '조사에 적극 협조해서 사건이 해결되었어요. 앞으로도 사실관계를 명확히 정리해두면, 문제 해결에 큰 도움이 될 거예요.',
        },
        {
          id: 2,
          text: '동료들과의 관계를 생각해 거리를 둔다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 5, happiness: -10, confidence: -5, anxiety: 5 },
          message: '동료들과 거리를 두니 관계가 소원해졌어요. 다음에는 문제 해결과 인간관계 유지를 모두 고려하는 균형 잡힌 접근을 시도해 보세요.',
        },
      ],
    },
    {
      id: 3,
      text: '동료가 개인적인 문제라며 이유를 설명했어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '상사에게 이 사실을 알려본다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 5, anxiety: -2 },
          message: '상사에게 사실을 전달해 문제를 해결했어요. 앞으로도 상황을 명확하게 전달하는 자세를 유지하면 좋을 것 같아요.',
        },
        {
          id: 2,
          text: '동료를 도와 문제를 해결해보려 한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 10, happiness: -5, confidence: -10, anxiety: 15 },
          message: '동료를 도왔지만 문제가 해결되지 않았어요. 다음에는 도움을 주기 전에 상황의 복잡성을 충분히 파악하는 것이 필요할 것 같아요.',
        },
      ],
    },
    {
      id: 4,
      text: '기밀 정보 유출로 회사에 큰 피해가 발생했어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '늦게나마 사실을 보고한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 0, confidence: 5, anxiety: -5 },
          message: '늦게 보고했지만 피해가 컸어요. 앞으로는 신속하게 대응해서 상황을 미리 막을 수 있도록 연습해 보세요.',
        },
        {
          id: 2,
          text: '여전히 아무런 행동도 하지 않는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -10, anxiety: 20 },
          message: '아무런 조치를 취하지 않아 회사에 큰 피해가 발생했어요. 다음번에는 문제를 인지하면 바로 적극적으로 대응해보는 것이 중요해요.',
        },
      ],
    },
    {
      id: 5,
      text: '문제가 해결되었어요. 회사는 기밀 정보를 보호하기 위해 필요한 조치를 취했답니다.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '문제가 해결되지 않아 회사가 큰 피해를 입었어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
