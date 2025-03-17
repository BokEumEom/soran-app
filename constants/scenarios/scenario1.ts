import { Scenario } from '@/types/scenario';

export const scenario1: Scenario = {
  id: 1,
  title: '직장 내 괴롭힘에 대처하기',
  description: '동료가 계속 당신의 업무를 방해하고 부정적인 말을 해요. 어떻게 대응하시겠어요?',
  chapters: [
    {
      id: 1,
      text: '동료가 계속 당신의 업무를 방해하고 부정적인 말을 해요. 어떻게 대응하시겠어요?',
      choices: [
        { 
          id: 1, 
          text: '동료에게 직접 문제를 제기해본다.', 
          nextChapterId: 2, 
          emotionalImpact: { stress: -10, happiness: 0, confidence: 10, anxiety: -5 },
          message: '동료와 솔직하게 얘기한 덕분에 갈등이 풀렸어요. 앞으로도 서로 마음을 열고 대화한다면 더 좋은 관계로 발전할 수 있을 거예요.',
        },
        { 
          id: 2, 
          text: '상사에게 이 문제를 이야기해본다.', 
          nextChapterId: 3, 
          emotionalImpact: { stress: -5, happiness: 5, confidence: 5, anxiety: -3 },
          message: '상사에게 이야기한 후 상황이 점점 개선되었어요. 다음에는 구체적인 사례와 함께 이야기하면 더 도움이 될 거예요.',
        },
        { 
          id: 3, 
          text: '무시하고 업무에 집중해본다.', 
          nextChapterId: 4, 
          emotionalImpact: { stress: 10, happiness: -5, confidence: -5, anxiety: 10 },
          message: '문제를 무시했더니 상황이 오히려 악화되었어요. 앞으로는 초기부터 적극적으로 소통해보는 방법을 고민해보세요.',
        },
      ],
    },
    {
      id: 2,
      text: '동료가 방어적으로 반응해요. 어떻게 할까요?',
      choices: [
        { 
          id: 1, 
          text: '중재자의 도움을 받아 갈등을 풀어본다.', 
          nextChapterId: 5, 
          emotionalImpact: { stress: -5, happiness: 10, confidence: 5, anxiety: -2 },
          message: '중재자의 도움 덕분에 갈등이 잘 풀렸어요. 앞으로도 중립적인 제3자의 조언을 구하는 것이 좋을 것 같아요.',
        },
        { 
          id: 2, 
          text: '먼저 사과하며 상황을 모면해본다.', 
          nextChapterId: 6, 
          emotionalImpact: { stress: 5, happiness: -10, confidence: -5, anxiety: 5 },
          message: '사과했지만 상황은 오히려 복잡해졌어요. 다음번에는 문제의 근본 원인을 함께 고민해보는 방법을 시도해보세요.',
        },
      ],
    },
    {
      id: 3,
      text: '상사가 두 사람과의 면담을 준비했어요. 어떻게 준비할까요?',
      choices: [
        { 
          id: 1, 
          text: '구체적인 사례를 정리해간다.', 
          nextChapterId: 5, 
          emotionalImpact: { stress: -5, happiness: 10, confidence: 10, anxiety: -3 },
          message: '구체적인 사례를 잘 준비해 면담에서 효과적으로 설명했어요. 앞으로도 기록을 남기는 습관이 큰 도움이 될 거예요.',
        },
        { 
          id: 2, 
          text: '문제를 축소해서 말해본다.', 
          nextChapterId: 6, 
          emotionalImpact: { stress: 5, happiness: -10, confidence: -5, anxiety: 10 },
          message: '문제를 축소해서 전달했지만 원하는 결과를 얻지 못했어요. 다음에는 문제의 본질을 솔직하게 말해보세요.',
        },
      ],
    },
    {
      id: 4,
      text: '동료의 행동이 더 심해져 업무에 지장이 생겼어요. 어떻게 할까요?',
      choices: [
        { 
          id: 1, 
          text: '결국 상사에게 문제를 알린다.', 
          nextChapterId: 5, 
          emotionalImpact: { stress: -10, happiness: 5, confidence: 5, anxiety: -5 },
          message: '결국 상사에게 알린 덕분에 상황이 해결되었어요. 문제 발생 시 빠르게 소통하는 습관을 길러보세요.',
        },
        { 
          id: 2, 
          text: '아무런 행동도 취하지 않는다.', 
          nextChapterId: 6, 
          emotionalImpact: { stress: 15, happiness: -10, confidence: -5, anxiety: 15 },
          message: '아무런 조치를 취하지 않아 상황이 악화되었어요. 앞으로는 문제를 인지하면 바로 대응하는 연습을 해보세요.',
        },
      ],
    },
    {
      id: 5,
      text: '갈등이 해결되고 업무가 정상으로 돌아왔어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '상황이 악화되어 갈등이 해결되지 않았어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
