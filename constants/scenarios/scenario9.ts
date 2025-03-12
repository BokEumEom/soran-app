import { Scenario } from '@/types/scenario';

export const scenario9: Scenario = {
  id: 9,
  title: '낯선 도시에서 길을 잃었을 때',
  description: '낯선 도시에서 혼자 길을 잃은 상황이에요. 이제 어떻게 대처할지 함께 고민해봐요!',
  chapters: [
    {
      id: 1,
      text: '낯선 도시에서 길을 잃어버렸어요. 모든 것이 낯설어서 당황스럽습니다. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '현지인에게 도움을 요청한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 15, anxiety: -5 },
          message:
            '현지인에게 도움을 청하니 친절하게 안내받아 길을 찾았어요. 덕분에 새로운 인연도 만나게 되었답니다!',
        },
        {
          id: 2,
          text: '기억을 더듬어 스스로 길을 찾는다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, confidence: 15, happiness: 10, anxiety: -5 },
          message:
            '혼자서 길을 찾으며 자신감을 얻었어요. 스스로 문제를 해결하는 용기를 느낄 수 있답니다!',
        },
        {
          id: 3,
          text: '그냥 무작정 걸으며 길을 찾으려 한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 15, confidence: -10, happiness: -10, anxiety: 20 },
          message:
            '그냥 걷기만 하니 길을 찾지 못해 불안과 스트레스가 커졌어요. 조금 더 신중하게 선택해보세요.',
        },
      ],
    },
    {
      id: 2,
      text: '현지인의 도움 덕분에 길을 찾았고, 그 과정에서 좋은 인연도 만나게 되었어요.',
      choices: [
        {
          id: 1,
          text: '현지인과 함께 새로운 곳들을 탐험한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -15, confidence: 10, happiness: 20, anxiety: -5 },
          message:
            '현지인과 함께 예상치 못한 모험을 즐기며 새로운 친구도 사귀었어요. 즐거운 경험이 되었답니다!',
        },
        {
          id: 2,
          text: '처음 가고자 했던 목적지로 돌아간다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 10, anxiety: -10 },
          message:
            '목적지로 무사히 돌아가니 큰 안도감을 느꼈어요. 다음엔 더 여유롭게 계획해보세요!',
        },
      ],
    },
    {
      id: 3,
      text: '혼자서 길을 찾았고, 그 과정에서 자신감이 생겼어요. 이제 더 많은 도전에 나설 준비가 되었답니다!',
      choices: [
        {
          id: 1,
          text: '도시에 대해 더 알아보고 새로운 곳들을 탐험한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 15, anxiety: -5 },
          message:
            '새로운 정보를 찾아 도시 곳곳을 탐험하며 즐거움을 만끽했어요. 모험이 주는 기쁨을 느껴보세요!',
        },
        {
          id: 2,
          text: '일정을 조정해 숙소로 돌아가 휴식을 취한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 10, anxiety: -5 },
          message:
            '무리하지 않고 휴식을 선택했어요. 충분한 휴식은 다음 도전을 위한 에너지를 줍니다.',
        },
      ],
    },
    {
      id: 4,
      text: '길을 잃은 채 무작정 걸어가다가 점점 피로해지고 혼란스러워졌어요.',
      choices: [
        {
          id: 1,
          text: '주변에 도움을 요청하기로 결심한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: -5, happiness: 5, anxiety: -5 },
          message:
            '결국 주변에 도움을 청해 길을 찾았고, 늦었지만 안정을 되찾았어요. 다음번엔 망설이지 마세요!',
        },
        {
          id: 2,
          text: '계속 혼자서 길을 찾으려 한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 20, confidence: -15, happiness: -20, anxiety: 20 },
          message:
            '혼자 계속 길을 찾으려 하다가 더 지치고 불안해졌어요. 때론 주변의 도움을 받는 것도 현명한 선택입니다.',
        },
      ],
    },
    {
      id: 5,
      text: '새로운 사람들을 만나거나 스스로 길을 찾은 경험 덕분에 자신감과 행복을 되찾았어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '혼자 길을 찾으려다 너무 지치고 스트레스를 많이 받았습니다.',
      isEnding: true,
      choices: [],
    },
  ],
};
