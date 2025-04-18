import { Scenario } from '@/types/scenario';

export const scenario13: Scenario = {
  id: 13,
  title: '새로운 곳에 거주지를 옮긴 후 외로움',
  description: '새로운 도시에 이사한 후 외로움을 느끼는 상황에서, 어떻게 사회적 관계를 형성하고 적응할지 함께 고민해봐요.',
  chapters: [
    {
      id: 1,
      text: '새로운 도시에 이사했지만 외로움을 느끼고 있어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '지역 모임이나 동호회에 가입한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 15, anxiety: -5 },
          message: '지역 모임에서 새로운 사람들과 친해지며 외로움을 해소하고 긍정적인 에너지를 얻었어요.',
        },
        {
          id: 2,
          text: '직장 동료들과 가까워지기 위해 노력한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 10, anxiety: -5 },
          message: '직장 동료들과 더 친해져서 직장 생활이 즐거워지고, 외로움이 조금씩 해소되기 시작했어요.',
        },
        {
          id: 3,
          text: '혼자 시간을 보내며 적응해 나간다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 5, confidence: -5, happiness: -10, anxiety: 10 },
          message: '혼자 보내는 시간이 많아지면서 외로움이 점점 커지고, 적응에 어려움을 겪고 있어요.',
        },
      ],
    },
    {
      id: 2,
      text: '지역 모임에서 새로운 사람들과의 관계가 형성되었어요. 계속해서 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '모임에 꾸준히 참석하며 사회적 관계를 강화한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 20, anxiety: -5 },
          message: '다양한 사람들과 친해지며 즐거운 시간을 보내고, 외로움이 완전히 해소되었어요.',
        },
        {
          id: 2,
          text: '새로운 친구들과 개별적으로 만나며 더 깊은 관계를 쌓는다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 15, anxiety: -5 },
          message: '개별적인 만남을 통해 서로에 대한 신뢰가 쌓이고, 외로움이 점차 사라졌어요.',
        },
      ],
    },
    {
      id: 3,
      text: '직장 동료들과의 관계가 개선되었어요. 이제 외로움은 조금씩 해소되고 있습니다. 계속해서 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '동료들과 사적인 시간을 보내며 더 가까워진다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 15, anxiety: -5 },
          message: '사적인 모임을 통해 우정을 쌓으며, 직장 생활의 즐거움과 함께 외로움도 해소되고 있어요.',
        },
        {
          id: 2,
          text: '직장 외부에서도 새로운 인맥을 넓혀본다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 20, anxiety: -5 },
          message: '직장 밖에서도 다양한 사람들을 만나며, 사회적 관계가 풍부해지고 외로움이 극복되었어요.',
        },
      ],
    },
    {
      id: 4,
      text: '혼자 보내는 시간이 길어지면서 외로움이 더 심해졌어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '혼자 보내는 시간을 줄이고 사회적 활동을 시작한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 15, anxiety: -5 },
          message: '사회적 활동을 시작하니, 점차 외로움이 해소되고 마음의 평화를 찾게 되었어요.',
        },
        {
          id: 2,
          text: '여전히 혼자 지내며 적응을 기다린다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 10, confidence: -10, happiness: -15, anxiety: 10 },
          message: '혼자 보내는 시간이 계속되면서 외로움과 우울감이 커져 힘든 시간을 보내고 있어요.',
        },
      ],
    },
    {
      id: 5,
      text: '사회적 관계를 형성하며 외로움을 극복하고, 새로운 환경에 완전히 적응했습니다.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '외로움이 해소되지 않고 우울감이 커져, 새로운 사람들과의 관계 형성에 어려움을 겪고 있습니다.',
      isEnding: true,
      choices: [],
    },
  ],
};
