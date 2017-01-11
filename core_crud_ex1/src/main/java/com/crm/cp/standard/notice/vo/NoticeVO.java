package com.crm.cp.standard.notice.vo;

import org.springframework.stereotype.Component;

@Component
public class NoticeVO {

	String notice_id;
	String org_id;
	String title;
	String cont;
	String start_date;
	String end_date;

	String strd_d;
	String end_d;
	String fst_reg_id_nm;
	String fst_reg_dt;
	String fin_mdfy_id_nm;
	String fin_mdfy_dt;
	String chk_num;
	String org_nm;

	public NoticeVO() {
	}


	public NoticeVO(String notice_id, String org_id, String title, String cont,
			String start_date, String end_date, String strd_d, String end_d,
			String fst_reg_id_nm, String fst_reg_dt, String fin_mdfy_id_nm,
			String fin_mdfy_dt, String chk_num, String org_nm) {
		super();
		this.notice_id = notice_id;
		this.org_id = org_id;
		this.title = title;
		this.cont = cont;
		this.start_date = start_date;
		this.end_date = end_date;
		this.strd_d = strd_d;
		this.end_d = end_d;
		this.fst_reg_id_nm = fst_reg_id_nm;
		this.fst_reg_dt = fst_reg_dt;
		this.fin_mdfy_id_nm = fin_mdfy_id_nm;
		this.fin_mdfy_dt = fin_mdfy_dt;
		this.chk_num = chk_num;
		this.org_nm = org_nm;
	}

	public String getNotice_id() {
		return notice_id;
	}

	public void setNotice_id(String notice_id) {
		this.notice_id = notice_id;
	}

	public String getOrg_id() {
		return org_id;
	}

	public void setOrg_id(String org_id) {
		this.org_id = org_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCont() {
		return cont;
	}

	public void setCont(String cont) {
		this.cont = cont;
	}

	public String getFst_reg_id_nm() {
		return fst_reg_id_nm;
	}

	public void setFst_reg_id_nm(String fst_reg_id_nm) {
		this.fst_reg_id_nm = fst_reg_id_nm;
	}

	public String getFin_mdfy_id_nm() {
		return fin_mdfy_id_nm;
	}

	public void setFin_mdfy_id_nm(String fin_mdfy_id_nm) {
		this.fin_mdfy_id_nm = fin_mdfy_id_nm;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public String getStrd_d() {
		return strd_d;
	}

	public void setStrd_d(String strd_d) {
		this.strd_d = strd_d;
	}

	public String getEnd_d() {
		return end_d;
	}

	public void setEnd_d(String end_d) {
		this.end_d = end_d;
	}

	public String getFst_reg_dt() {
		return fst_reg_dt;
	}

	public void setFst_reg_dt(String fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}

	public String getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}

	public void setFin_mdfy_dt(String fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}

	public String getChk_num() {
		return chk_num;
	}

	public void setChk_num(String chk_num) {
		this.chk_num = chk_num;
	}

	public String getOrg_nm() {
		return org_nm;
	}

	public void setOrg_nm(String org_nm) {
		this.org_nm = org_nm;
	}

}
