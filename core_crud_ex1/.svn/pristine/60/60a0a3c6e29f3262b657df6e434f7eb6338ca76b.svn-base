package com.crm.cp.sales.teamgoal.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.teamgoal.service.TeamGoalService;
import com.crm.cp.sales.teamgoal.vo.TeamGoalSumVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.ExcelUploadService;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/05 
 * 내용 : 팀별목표 화면에 대한 Controller 작성
 * 
 */
@Controller
public class TeamGoalController {

	//메뉴 조회용 Service
	@Autowired
	MenuService menuService;

	//팀별목표 조회용 Service
	@Autowired
	TeamGoalService teamGoalService;

	/**
	 * 팀별목표 초기화면 호출 
	 *   - 초기 호출 시 팀별 목표 금액에 대한 합계 금액 리스트를 출력한다.
	 *   - 조회 버튼 클릭시 해당 년도에 대한 리스트도 출력
	 * 
	 * @param ccPageNum
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/teamgoal", method = RequestMethod.GET)
	public ModelAndView TeamGoalList(HttpSession session,
			HttpServletRequest request, HttpServletResponse response) {
		ModelAndView mov;
		String year = ""; 
		Map<String, String> map = new HashMap<String, String>();
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			String param_year = request.getParameter("year"); 
			String user = (String) session.getAttribute("user");
			TeamGoalVo orgVO = teamGoalService.getOrg_id(user);
			map.put("org_id", orgVO.getOrg_id());
			map.put("emp_cd", orgVO.getEmp_cd());
			if (param_year == null || param_year == "") {
				Calendar cal = Calendar.getInstance();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
				year = sdf.format(cal.getTime()); 
				map.put("year", year);
			}
			else {
				year = param_year;
				map.put("year", year);
			}
			
			// 메뉴 List 조회
			List<MenuVO> menuList = menuService.selectAll(session);
			 
			// 팀별목표 List 조회
			List<TeamGoalSumVo> teamGoalList = teamGoalService.getSumTeamGoal(map);
			mov = new ModelAndView("teamgoal");
			mov.addObject("menuList", menuList);
			mov.addObject("teamGoalList", teamGoalList);
			mov.addObject("year", year);
		}
		return mov;
	}
	
	
	/**
	 * 목표 엑셀 Down 기능
	 *   - 서버에 있는 엑셀 파일 다운로드
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/TeamExceldownload.do", method=RequestMethod.GET)
	public ModelAndView downloadRequest( HttpSession session, HttpServletRequest request, HttpServletResponse response) throws Exception {
		File downLoadFile = getFile(request);
		return new ModelAndView("download", "fileDownload", downLoadFile);
	}
	
	/**
	 * 파일 생성 Function
	 * @param request
	 * @return
	 */
	public File getFile(HttpServletRequest request){ //다운로드 폴더에서 파일객체를생성한다.
		  String path = "/root/다운로드/";
		  String filename = request.getParameter("filename");
		  
		  return new File(path, filename);
	}
	
	/**
	 * 팀별목표 파일업로드 폼 호출
	 * @return
	 */
	@RequestMapping(value="/ExcelUpload.do", method=RequestMethod.GET) 
	public ModelAndView fileuploadForm(HttpSession session) {
		ModelAndView mov = new ModelAndView();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		}
		else {
			mov.addObject("goal", "팀별목표");
			mov.setViewName("/sales/goal/ExcelUpload");
		}
		return mov;
	}
	
	/**
	 * 엑셀 업로드 수행
	 *   1. 팀별목표 파일업로드에서 받은 파일 업로드
	 *   2. 업로드한 파일의 내용을 List로 뽑기
	 *   3. 뽑은 List를 DB에 insert
	 *   
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value="/ExcelUpload.do", method=RequestMethod.POST) 
	@ResponseBody
	public String  fileUpload(HttpSession session, MultipartHttpServletRequest request, HttpServletResponse response) throws IOException {

		String result = "";
		int res = 0;
		ExcelUploadService excelUploadService = new ExcelUploadService();
		
		//엑셀 업로드용
		List<TeamGoalVo> list = null;
		//등록 가능여부 조회
		HashMap<String, Object> AvailMap = null;
		//팀별목표 수정 
		HashMap<String, Object> modiMap = null;
		//팀별목표 저장
		HashMap<String, Object> insertMap = null;
		//등록 가능여부 count 
		int count = 0; 
		if (session.getAttribute("user") == null) {
			return "standard/login/login";
		}
		else {
			try {
				//엑셀 업로드 호출
				list = excelUploadService.excelFileUpload(request);
				if(list.size() != 0) {
					for(int i=0; i < list.size(); i++) {
						AvailMap = new HashMap<String, Object>();
						AvailMap.put("base_year", list.get(i).getBase_year());
						AvailMap.put("org_id", list.get(i).getOrg_id());
						//등록 가능 여부 조회(I/U 결정을 위함)
						count = this.teamGoalService.AvailableTeamGoal(AvailMap);
						
						if (count != 0) {	//update
							modiMap = new HashMap<String, Object>();
							modiMap.put("list", list.get(i));
							modiMap.put("user_id", session.getAttribute("user"));
							modiMap.put("base_year", list.get(i).getBase_year());
							modiMap.put("org_id", list.get(i).getOrg_id());
							
							res = this.teamGoalService.ModiTeamGoal(modiMap);
						}else {				//insert
							insertMap = new HashMap<String, Object>();
							insertMap.put("list", list.get(i));
							insertMap.put("user_id", session.getAttribute("user"));
							
							res = this.teamGoalService.InsertTeamGoal(insertMap);
						}
					}
					if (res == 1) {
						result = "Y";
					}else {
						result = "N";
					}
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return result;
		
	}
	
	@RequestMapping(value="/UpdateTeamGoal.do", method=RequestMethod.POST)
	@ResponseBody
	public HashMap<String, Object> insertTeamGoal(HttpSession session, @RequestBody List<Object> json, HttpServletResponse response) {
		HashMap<String, Object> map = null;
		for (int i = 0; i < json.size(); i++) {
			map = new HashMap<String, Object>();
			if(json.get(i) != null){
				map = (HashMap<String, Object>) json.get(i);
				
				if (json.size() > 0) {
					int result = 0;
					ArrayList<String> list = (ArrayList<String>) map.get("amt_array");	//클라이언트에서 받은 array를 List로 변경
					TeamGoalVo teamGoalVo = new TeamGoalVo();
					
					teamGoalVo.setBase_year((String) map.get("year"));
					teamGoalVo.setOrg_id((String) map.get("org"));
					teamGoalVo.setJan_amt(Long.parseLong(list.get(0)));
					teamGoalVo.setFeb_amt(Long.parseLong(list.get(1)));
					teamGoalVo.setMar_amt(Long.parseLong(list.get(2)));
					teamGoalVo.setApr_amt(Long.parseLong(list.get(3)));
					teamGoalVo.setMay_amt(Long.parseLong(list.get(4)));
					teamGoalVo.setJun_amt(Long.parseLong(list.get(5)));
					teamGoalVo.setJly_amt(Long.parseLong(list.get(6)));
					teamGoalVo.setAgt_amt(Long.parseLong(list.get(7)));
					teamGoalVo.setSep_amt(Long.parseLong(list.get(8)));
					teamGoalVo.setOct_amt(Long.parseLong(list.get(9)));
					teamGoalVo.setNov_amt(Long.parseLong(list.get(10)));
					teamGoalVo.setDec_amt(Long.parseLong(list.get(11)));
					
					result = this.teamGoalService.UpdateTeamGoal(teamGoalVo);
					
					if (result == 1) {
						map.put("result", "Y");
					}else {
						map.put("result", "N");
					}
				}
				else {
					map.put("result", "N");
				}
			}
		}
		
		return map; 
	}
	
}
